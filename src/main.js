import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, BootstrapVueIcons, LayoutPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import Home from './pages/Home.vue';
import Gallery from './pages/Gallery.vue';
import NotFound from './pages/NotFound.vue';
import TheTeam from './pages/TheTeam.vue';
import Builds from './pages/Builds.vue';

Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '*', component: NotFound },
  { path: '/builds', component: Builds },
  { path: '/meet-the-team', component: TheTeam }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
