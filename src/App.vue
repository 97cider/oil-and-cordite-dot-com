<template>
  <div id="app">
    <Header/>
      <div class="main-container">
        <div class="main-blog">
            <router-view/>
        </div>
        <div class="main-renderer-only-desktop">
            <Renderer />
        </div>
     </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Renderer from './components/Renderer.vue';
export default {
  name: 'App',
  components: {
      Header,
      Renderer
  }
}
</script>

<style>
</style>