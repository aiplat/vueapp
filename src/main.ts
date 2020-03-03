import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';
import store from './vuex/store';
import cm from './plugins/cmapp';
import conf from './service/conf';
import apis from './service/apis';
import './registerServiceWorker';

Vue.config.productionTip = true;
Vue.prototype.$cm = cm;
Vue.prototype.$conf = conf;
Vue.prototype.$apis = apis;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
