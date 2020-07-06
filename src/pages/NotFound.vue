<template>
  <div id="app">
    404 Not Found
    Your request was lost in the clouds!
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
   return {
     isSimplified : true
   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>