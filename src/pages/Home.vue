<template>
  <div id="app">
    <Header />
    <transition name="fade" appear="true">
      <div class="main-container"> 
        <div class="main">
          <div class="game-description">

            <i>In a world choked by pollution and robbed of resources, wage a one-man war on what remains of the greedy nations and their robotic robbers. 
            Ignite your ship and use the surrounding smog to blast through your enemies! </i>

            <br/><br/><br/>

            <h3>What is Oil and Cordite?</h3>
            Oil and Cordite is an action packed flight game currently in development. The game features fast paced action and a intuitive control system. This should probably be replaced with some cool trailers or gameplact screen shots! 
            
            <br/><br/><br/>

            <h3>What Engine is Oil and Cordite Using?</h3>
            Oil and Cordite is built using the Unity engine.
            
            <br/><br/><br/>

            <h3>What Platforms Support Oil and Cordite?</h3>
            Oil and Cordite currently only supports PC, although a Switch port may be possible.
            
            <br/><br/><br/>

            <h3>Why is this Homepage So Barren?</h3>
            Because the cool interactive three.js homepage is still in progress. It should be finished soon.
            
            <br/><br/><br/>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import '../scss/style.scss';
import Header from '../components/Header.vue';
import HelloWorld from '../components/HelloWorld.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header
  }
}
</script>