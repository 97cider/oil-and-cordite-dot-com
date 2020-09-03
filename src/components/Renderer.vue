<template>
    <div id="container"></div>
</template>

<script>
import { Vector3 } from 'three';
const Three = require('three');
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
      name: 'POGGERS'
    }
  },
  methods: {
    init: function () {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 40, 650);
        //this.camera.position = new Three.Vector3(93.3, 50.0, -178);
        this.camera.position = new Three.Vector3(150.7, 70, -147.9);
        this.camera.lookAt( 0, 30, 0 );

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
            console.log("Added a new geometry object");
        });

        this.ship.forEach(obj => {
            var shipObject = new Three.Mesh( obj.geometry, material );
            shipObject.scale.set( 0.45, 0.45, 0.45 );
            shipObject.rotateY( Math.PI / 1.12);
            shipObject.translateY(25.0);

            // var shipWireFrame = new Three.Mesh(obj.geometry, wireFrameMaterial);
            // shipWireFrame.scale.set( 0.55, 0.55, 0.55 );
            // shipWireFrame.rotateY( Math.PI );
            // shipWireFrame.translateY(25.0);

            this.scene.add( shipObject );
            // this.scene.add( shipWireFrame );
        });

        // this.geoGroup.scale = new Three.Vector3(0.001,0.001,0.001);

        // this.scene.add(this.geoGroup);

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.update();

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
        this.scene.add(lightTwo );

        // var light = new Three.AmbientLight( 0x222222 );
        // this.scene.add( light );

        var width = window.width;
        var height = window.height;

        this.composer = new EffectComposer( this.renderer );

        var ssaoPass = new SSAOPass( this.scene, this.camera, container.clientWidth, container.clientHeight );
        ssaoPass.kernelRadius = 4;
        // ssaoPass.minDistance = 0.001;
        // ssaoPass.maxDistance = 0.29;
        this.composer.addPass( ssaoPass );

        //ssaoPass.output = parseInt( SSAOPass.OUTPUT.Depth );

    },
    loadGroundGeo: function () {
       return new Promise((resolve, reject) => {
            console.log("STARTED LOADING MODELS");
            console.log(this.name);
            var modelLoader = new FBXLoader();
            var group = [];
            modelLoader.load( 'public/models/scene-geometry-2.fbx',
                function ( object ) {
                    object.traverse( function ( child ) {
                        if ( child.isMesh && child.geometry.isBufferGeometry ) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            group.push(child);
                            console.log("ADDED A MESH");
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
            console.log("STARTED LOADING SHIP GEO");
            console.log(this.name);
            var modelLoader = new FBXLoader();
            var group = [];
            modelLoader.load( 'public/models/ship-scene.fbx',
                function ( object ) {
                    object.traverse( function ( child ) {
                        if ( child.isMesh && child.geometry.isBufferGeometry ) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            group.push(child);
                            console.log("ADDED A MESH");
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
    animate: function () {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        // this.controls.update();
        // this.renderer.render(this.scene, this.camera);
        this.composer.render();
        //console.log( 'Pos:' + this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z + ' Rot:' + this.camera.rotation.x + ' ' + this.camera.rotation.y + ' ' + this.camera.rotation.z );
    },
    loadResources: async function () {
        console.log("Began loading models");
        return this.loadGroundGeo().then( ( res ) => {
            this.geoGroup = res;
            console.log(this.geoGroup);
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
    console.log("Render has been mounted!");
    this.initializeLoading();
    //this.loadResources();
    //this.init();
    //this.animate();
  }
}
</script>

<style scoped>
#container {
  height: 1080px;
}
</style>