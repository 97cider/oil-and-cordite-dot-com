<template>
  <div id="app">
    <Header />
    <transition name="fade" appear="true">
      <div class="main-container"> 
        <div class="main">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </div>
    </transition>
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