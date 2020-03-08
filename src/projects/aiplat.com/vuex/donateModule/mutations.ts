import * as types from '@/projects/aiplat.com/vuex/donateModule/mutations_types';

export default {
  [types.SETDNID](state: any, d: any) {
    state.dnid = d;
  },
};
