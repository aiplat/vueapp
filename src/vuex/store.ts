import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import donateModule from './donateModule/index';

export default new Vuex.Store({
    modules: {
        donateModule,
    },
});
