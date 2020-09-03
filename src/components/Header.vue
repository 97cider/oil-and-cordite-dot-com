<template>
  <div class="header-container">
    <img class="team-logo" alt="group-logo" src="src/assets/logo.png">
    <img class="title-logo" alt="title-logo" src="src/assets/title-logo.png">
    <b-container fluid="true" class="header-links">
      <b-row class="justify-content-md-center" align-content="center">
        <b-col md="1" align-self="center">
          <router-link v-on:click.native="navToHome" to="/" class="header-link primary">Home</router-link>
        </b-col>
        <b-col md="1" align-self="center">
          <router-link v-on:click.native="navToGallery" to="/gallery" class="header-link primary">Gallery</router-link>
        </b-col>
        <b-col md="1" align-self="center">
          <router-link v-on:click.native="navToTeam" to="/meet-the-team" class="header-link primary">The Team</router-link>
        </b-col>
        <b-col md="1" align-self="center">
          <router-link v-on:click.native="navToPlay" to="/play" class="header-link primary">Play</router-link>
        </b-col>
        <b-col md="1" align-self="center">
          <a href="https://github.com/PeterEldredge/OilAndCordite" target="_blank" class="header-link secondary">Github <b-icon icon="box-arrow-up-right"></b-icon></a>
        </b-col>
        <b-col md="1" align-self="center">
          <a href="https://drive.google.com/file/d/1w8Z_Ao5_cbmh4Zw1A5nqN6Fi2fAsVnAu/view" target="_blank" class="header-link secondary">Press Kit <b-icon icon="box-arrow-up-right"></b-icon></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../scss/style.scss';
import { BIcon, BContainer, BRow, BCol } from 'bootstrap-vue';

export default {
  name: 'Header',
  components: {
    BIcon,
    BContainer,
    BRow,
    BCol
  },
  props: {
    msg: String
  },
  methods: {
    navToTeam: function () {
      this.$parent.navTeam();
    },
    navToHome: function () {
      this.$parent.navHome();
    },
    navToGallery: function () {
      this.$parent.navGallery();
    },
    navToBuilds: function () {
      this.$parent.navBuilds();
    },
    navToPlay: function () {
      this.$parent.navPlay();
    }
  }
}
</script>
