import Vue from 'vue';
import VueRouter from 'vue-router';

import { BootstrapVue, BootstrapVueIcons, LayoutPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import Home from './pages/Home.vue';
import MeetTheTeam from './pages/TheTeam.vue';
import Gallery from './pages/Gallery.vue';
import Builds from './pages/Builds.vue';
import NotFound from './pages/NotFound.vue';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(BootstrapVueIcons);

const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound },
  { path: '/meet-the-team', component: MeetTheTeam },
  { path: '/play', component: Builds },
  { path: '/gallery', component: Gallery },
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
