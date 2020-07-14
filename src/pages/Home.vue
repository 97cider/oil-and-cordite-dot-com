<template>
  <div id="app">
    <Header />
    <div class="main">
      <img alt="Vue logo" src="src/assets/logo.png">
      <div class="game-description">
      In a world choked by pollution and robbed of resources, wage a one-man war on what remains of the greedy nations and their robotic robbers. 
      Ignite your ship and use the surrounding smog to blast through your enemies! 
      </div>
    </div>
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