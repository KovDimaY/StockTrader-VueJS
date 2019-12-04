import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import store from './store';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stocktrading-vuejs.firebaseio.com/';

Vue.filter('currency', value => `$${value.toLocaleString()}`)

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
