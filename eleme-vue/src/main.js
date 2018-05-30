// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/good';
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;

let router = new VueRouter();
router.start