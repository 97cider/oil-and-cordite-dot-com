<template>
    <div id="container"></div>
</template>

<script>
const Three = require('three');
const { TweenLite } = require('gsap');
const { FBXLoader } = require('three/examples/jsm/loaders/FBXLoader');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls');
const { EffectComposer } = require('three/examples/jsm/postprocessing/EffectComposer');
const { SSAOPass } = require('three/examples/jsm/postprocessing/SSAOPass');
const { Reflector } = require('../scripts/ThreeReflectorDepth');

export default {
  name: 'Renderer',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      geoGroup: null,
      ship: null,
      controls: null,
      composer: null,
      target: null,
    }
  },
  methods: {
    init: function () {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 40, 650);
        this.camera.position = new Three.Vector3(150.7, 70, -147.9);

        this.scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshStandardMaterial( { color: 0xeeeeee } );
        let wireFrameMaterial = new Three.MeshStandardMaterial( { wireframe: true } );

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.geoGroup.forEach(obj => {
            var gameObject = new Three.Mesh(obj.geometry, material);
            gameObject.rotateX( -Math.PI / 2 );
            this.scene.add(gameObject);
        });

        this.ship.forEach(obj => {
            var shipObject = new Three.Mesh( obj.geometry, material );
            shipObject.scale.set( 0.45, 0.45, 0.45 );
            shipObject.rotateY( Math.PI / 1.12);
            shipObject.translateY(25.0);

            this.scene.add( shipObject );
        });

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);

        container.appendChild(this.renderer.domElement);

        let mirrorGeometry = new Three.CircleBufferGeometry( 40, 64 );

        let groundMirror = new Three.Reflector( mirrorGeometry, {
            textureWidth: container.clientWidth * window.devicePixelRatio,
            textureHeight: container.clientWidth * window.devicePixelRatio,
            color: 0x889999
        });

        groundMirror.scale.set(2.2, 2.2, 2.2);
        groundMirror.position.y = 7.8;
        groundMirror.rotateX( - Math.PI / 2 );
        this.scene.add( groundMirror );

        this.scene.add( new Three.HemisphereLight( 0xafb2d8,  0x6a4d77, 1));
        this.scene.fog = new Three.FogExp2( 0xefb5ec, 0.0012 );

        let lightTwo = new Three.DirectionalLight( 0x002288 );

        lightTwo.position.set( - 1, - 1, - 1 );

        this.scene.add( lightTwo );

        this.composer = new EffectComposer( this.renderer );

        let ssaoPass = new SSAOPass( this.scene, this.camera, container.clientWidth, container.clientHeight );
        ssaoPass.kernelRadius = 4;
        
        this.composer.addPass( ssaoPass );

    },
    loadGroundGeo: function () {
       return new Promise((resolve, reject) => {
            let modelLoader = new FBXLoader();
            let group = [];
            modelLoader.load( 'public/models/scene-bg-geometry.fbx',
                function ( object ) {
                    object.traverse( function ( child ) {
                        if ( child.isMesh && child.geometry.isBufferGeometry ) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            group.push(child);
                        }
                    });
                    resolve(group);
                },
            undefined,
            function ( err ) {
                console.log( err );
                reject();
            });
       });
    },
    loadShipGeo: function () {
       return new Promise((resolve, reject) => {
            var modelLoader = new FBXLoader();
            var group = [];
            modelLoader.load( 'public/models/ship-scene.fbx',
                function ( object ) {
                    object.traverse( function ( child ) {
                        if ( child.isMesh && child.geometry.isBufferGeometry ) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            group.push(child);
                        }
                    });
                    resolve(group);
                },
            undefined,
            function ( err ) {
                console.log( err );
                reject();
            });
       });
    },
    navigateToHome: function () {
        let _this = this;
        let targetLocation = new Three.Vector3(150.7, 70, -147.9);
        TweenLite.to({}, {
            duration: 2,
            onUpdate: function() {
                _this.camera.position.lerp(targetLocation, this.progress());
            }
        });
    },
    navigateToGallery: function () {
        let _this = this;
        let targetLocation = new Three.Vector3(130.7, 140, -147.9);
        TweenLite.to({}, {
            duration: 2,
            onUpdate: function() {
                _this.camera.position.lerp(targetLocation, this.progress());
            }
        });
    },
    navigateToTeam: function () {
        let _this = this;
        let targetLocation = new Three.Vector3(-50.7, 30, -100.9);
        TweenLite.to({}, {
            duration: 2,
            onUpdate: function() {
                _this.camera.position.lerp(targetLocation, this.progress());
            }
        });
    },
    navigateToPlay: function () {
        let _this = this;
        let targetLocation = new Three.Vector3(220.7, 50, -120.9);
        TweenLite.to({}, {
            duration: 2,
            onUpdate: function() {
                _this.camera.position.lerp(targetLocation, this.progress());
            }
        });
    },
    animate: function () {
        requestAnimationFrame(this.animate);
        this.camera.lookAt( 60, 30, 0 );
        // this.controls.update();
        // this.renderer.render(this.scene, this.camera);
        this.composer.render();
        //console.log( 'Pos:' + this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z + ' Rot:' + this.camera.rotation.x + ' ' + this.camera.rotation.y + ' ' + this.camera.rotation.z );
    },
    loadResources: async function () {
        return this.loadGroundGeo().then( ( res ) => {
            this.geoGroup = res;
        });
    },
    loadShipResources: async function () {
        console.log("Began loading ship");
        return this.loadShipGeo().then( ( res ) => {
            this.ship = res;
            this.init();
            this.animate();
        });
    },
    initializeLoading: function () {
        this.loadResources();
        this.loadShipResources();
    },
  },
  mounted() {
    this.initializeLoading();
  }
}
</script>

<style scoped>
#container {
  height: 1080px;
}
</style>