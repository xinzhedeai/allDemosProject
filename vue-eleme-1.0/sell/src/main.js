import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import {  } from './components/goods/goods';

Vue.use(VueRouter);
Vue.use(VueResource);



/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
