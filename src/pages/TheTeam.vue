<template>
  <div id="app">
    <Header />
    <transition name="fade" appear="true">
      <div class="main-container"> 
        <div class="main">
          <div class="team-header">The Team</div>
          <div class="team-header-sub"><i>(as it currently stands).</i></div>
          <transition-group name="list" tag="p">
            <li v-for="teamMember in teamMembers" :key="teamMember.name">
              <TeamMember v-bind:teamMember="teamMember" />
            </li>
          </transition-group>
        </div>
      </div>
    </transition>
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