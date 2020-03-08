import * as types from '@/vuexStore/commonModule/mutations_types';

export default {
  [types.SETTOKEN](state: any, d: any) {
    state.token = d;
  },
  [types.SETUSERINFO](state: any, d: any) {
    state.userInfo = d;
  },
  [types.SETWXINFO](state: any, d: any) {
    state.wxInfo = d;
  },
};
