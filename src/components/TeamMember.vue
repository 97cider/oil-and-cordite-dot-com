<template>
  <div class="team-member-info">
    <div class="team-member-name">{{ teamMember.name }}</div>
    <div class="team-member-icon" v-bind:src="teamMember.iconPath"></div>
    <img v-bind:src="'/public/images/' + teamMember.iconPath" /> 
    <div class="team-member-description">{{ teamMember.description }}</div>
    <span v-if="teamMember.personalWebLink">
      <b-button variant="primary">
         <b-icon icon="award-fill" />
      </b-button>
    </span>
    <span v-if="teamMember.twitterAt">
      <b-button variant="primary">
         <b-icon icon="at" />
      </b-button>
    </span>
    <span v-if="teamMember.personalWebLink">
      <b-button variant="primary">
         <b-icon icon="link45deg" />
      </b-button>
    </span>
    <span v-if="teamMember.linkedInLink">
      <b-button variant="primary">
         <b-icon icon="person-bounding-box" />
      </b-button>
    </span>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BIcon, BButton, BContainer, BRow, BCol } from 'bootstrap-vue';

export default {
  name: 'TeamMember',
  components: {
    BIcon,
    BButton,
    BContainer,
    BRow,
    BCol
  },
  props: {
    teamMember: {
      name: String,
      description: String,
      iconPath: String,
      websiteLink: String,
      twitterAt: String,
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
