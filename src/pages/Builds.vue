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