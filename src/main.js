import Vue from 'vue'
import Routes from './routes';

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = Routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/NotFound.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});