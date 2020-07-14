<template>
  <div id="app">
    <Header/>
    <div class="main-container"> 
      <div class="main">
        404 Not Found
        Your request was lost in the clouds!
      </div>
    </div>
  </div>
</template>

<script>
import '../scss/style.scss';
import HelloWorld from '../components/HelloWorld.vue';
import Header from '../components/Header.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  },
  data () {
   return {
     isSimplified : true
   }
  }
}
</script>