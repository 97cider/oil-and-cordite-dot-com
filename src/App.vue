<template>
  <div id="app">
    <Header/>
      <div class="main-container">
        <div class="main-blog">
            <router-view/>
        </div>
        <div class="main-renderer-only-desktop">
            <Renderer ref="renderer" />
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
  },
  methods: {
    navTeam: function () {
      // alert("damn bro");
      this.$refs.renderer.navigateToTeam();
    },
    navHome: function () {
      this.$refs.renderer.navigateToHome();
    },
    navGallery: function () {
      this.$refs.renderer.navigateToGallery();
    },
    navPlay: function () {
      this.$refs.renderer.navigateToPlay();
    }
  }
}
</script>

<style>
</style>