<template>
  <div id="app">
    <Header />
    <div class="main">
      <img alt="Vue logo" src="src/assets/logo.png">
      <li v-for="teamMember in teamMembers" :key="teamMember.name">
        <TeamMember v-bind:teamMember="teamMember" />
      </li>
    </div>
  </div>
</template>

<script>
import '../scss/style.scss';
import Header from '../components/Header.vue';
import HelloWorld from '../components/HelloWorld.vue';
import TeamMember from '../components/TeamMember.vue';
import Members from '../../public/data/TeamMembers.js';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    TeamMember
  },
  created() {
        this.teamMembers = Members.teamMembers;
        console.log(this.teamMembers);
    }
}
</script>