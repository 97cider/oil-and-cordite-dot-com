<template>
  <div id="app">
    <Header />
    <transition name="fade" appear="true">
      <div class="main-container"> 
        <div class="main">
          <div class="team-header">The Game</div>
          <div class="game-description">
            Using the button below, you can download the most recent playable release of Oil and Cordite. Additionally, you can find patch notes below. 
          </div>
          <div class="download-container">
            <b-button variant="outline-primary" class="download-button"> Download! </b-button>
          </div>
          <br/><br/><br/>
          <div class="game-description">
            <h3>Patch Notes:</h3>
              <i> There are no releases for this project at the moment. Patch notes are updated when a release is scheduled through GitHub.</i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import HelloWorld from '../components/HelloWorld.vue';

import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../scss/style.scss';
import { BButton } from 'bootstrap-vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>