<template>
  <div class="Header">
    This is a generic global header bar with no buttons or routing because I am way too lazy

    <router-link to="/">Home</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/meet-the-team">The Team</router-link>
    <router-link to="/Builds">Play</router-link>
    <a>Github <b-icon icon="exclamation-circle-fill" variant="success"></b-icon></a>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue';

export default {
  name: 'Header',
  components: {
    BIcon,
    BIconArrowUp,
    BIconArrowDown
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
