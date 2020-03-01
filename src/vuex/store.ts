import Vue from 'vue';
import Vuex from 'vuex';

import commonModule from './commonModule/index';
import aiplatComModule from './aiplatComModule/index';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    commonModule,
    aiplatComModule,
  },
});
