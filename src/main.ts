import Vue from '@/service/prototype';
import App from './App.vue';
import router from '@/builds/routes';
import store from '@/vuexStore/index';
import '@/builds/components';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
