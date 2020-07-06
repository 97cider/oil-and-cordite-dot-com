<template>
  <div id="app">
    <Header />
    <div>
      <img alt="Vue logo" src="src/assets/logo.png">
      <div class="header">This is the Oil and Cordite Home Page</div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import '../scss/style.scss';
import Header from  '../components/Header.vue';
import HelloWorld from '../components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>