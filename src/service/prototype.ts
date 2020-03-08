import Vue from 'vue';
import h5plus from '@/plugins/h5plusApi';
import cmappClass from '@/plugins/cmapp.class';
import conf from '@/builds/conf';
import apis from '@/builds/apis';
import axios from '@/plugins/axios';
import BusinessClass from '@/builds/Business.class';

window.H5 = h5plus;
window.cmapp = new cmappClass();
Vue.prototype.$conf = conf;
Vue.prototype.$apis = apis;
Vue.prototype.$axios = axios;
Vue.prototype.$business = new BusinessClass();

export default Vue;
