<template>
  <div id="app">
    <Header />
    <div class="main">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import Header from '../components/Header.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>