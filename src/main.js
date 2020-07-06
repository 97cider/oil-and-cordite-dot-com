import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home.vue';
import Gallery from './pages/Gallery.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Gallery', component: Gallery }
]

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
