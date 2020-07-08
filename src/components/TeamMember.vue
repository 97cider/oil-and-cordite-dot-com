<template>
  <div class="team-member-info">
    <div class="team-member-name">{{ teamMember.name }}</div>
    <div class="team-member-icon" v-bind:src="teamMember.iconPath"></div>
    <img v-bind:src="'/public/images/' + teamMember.iconPath" /> 
    <div class="team-member-description">{{ teamMember.description }}</div>
    <h1 v-if="teamMember.websiteLink"><b-icon icon="link45deg" />{{ teamMember.websiteLink }}</h1>
    <h1 v-if="teamMember.personalWebLink"><b-icon icon="link45deg" />{{ teamMember.personalWebLink }}</h1>
    <h1 v-if="teamMember.linkedInLink"><b-icon icon="link45deg" />{{ teamMember.linkedInLink }}</h1>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import { BIcon } from 'bootstrap-vue';

export default {
  name: 'TeamMember',
  components: {
    BIcon
  },
  props: {
    teamMember: {
      name: String,
      description: String,
      iconPath: String,
      websiteLink: String,
      personalWebLink: String,
      linkedInLink: String
    }
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
