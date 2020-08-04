<template>
  <div id="app">
    <Header />
    <transition name="fade" appear="true">
      <div class="main-container"> 
        <div class="main">
          <div class="team-header">The Game</div>
          <div class="game-description">
            Using the button below, you can download the most recent playable release of Oil and Cordite. Additionally, you can find patch notes below. 
            <br/>
            After clicking the download button, you will be navigated to a Google Drive sharable link. You can download the build by clicking the Download button 
            in the upper right hand corner of the screen.
            <br/><br/><br/>
          </div>
          <div class="download-container">
            <b-button variant="outline-primary" class="download-button" href="https://drive.google.com/file/d/1ABIWqeOyLyrSiEk4U83mR9mAIb_45fFb/view?usp=sharing" download> Download! <b-icon icon="box-arrow-up-right"></b-icon> </b-button>
          </div>
          <br/><br/><br/>
          <div class="game-description">
            <h2>Patch Notes:</h2>
            <h3> 08/24/2020: Beta Build </h3>
              The build located above is the current <b>Beta</b> build of the project. There are many aspects of the project subject to change.
              <br/>
              The changes for the Beta build are as follows: 
              <ul>
                <li>Added additional levels and art assets</li>
                <li>Added piercing effects and UI</li>
                <li>Lava levels and corresponding assets</li>
                <li>Updated clouds</li>
              </ul>
            <br/>
            <h3> 07/26/2020: Alpha Build </h3>
              <br/>
              The changes for the Alpha build are as follows: 
              <ul>
                <li>UI changes and art refactor</li>
                <li>Tutorial level flow and greybox</li>
                <li>Ship controls and banking</li>
                <li>Wielded weapons (laser)</li>
              </ul>
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
import { BButton, BIcon } from 'bootstrap-vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>