<template>
  <div id="app">
    <Header />
    <div class="main">
      <img alt="Vue logo" src="src/assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import '../scss/style.scss';
import Header from '../components/Header.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>