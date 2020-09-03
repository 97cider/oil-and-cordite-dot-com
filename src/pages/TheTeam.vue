<template>
  <div class="main-view team">
    <transition name="fade" appear="true">
      <div class="inner-container"> 
        <div class="main">
          <div class="team-header"><h3>The Team</h3></div>
          <div class="team-header-sub"><i>(as it currently stands).</i></div>
          <ul class="team-members">
            <li v-for="teamMember in teamMembers" :key="teamMember.name">
              <TeamMember v-bind:teamMember="teamMember" />
            </li>
          </ul>
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