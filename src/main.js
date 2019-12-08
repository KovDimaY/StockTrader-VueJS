import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import store from './store';
import Config from './config';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = Config.firebase.rootUrl;

Vue.filter('currency', value => `$${value.toLocaleString()}`);
Vue.filter('no-sign', value => Math.abs(value));

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
