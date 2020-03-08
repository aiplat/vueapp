import * as types from '@/vuexStore/commonModule/mutations_types';

export default {
  setToken: async ({ commit }: any, d: any) => {
    commit(types.SETTOKEN, d);
  },
  setUserInfo: async ({ commit }: any, d: any) => {
    commit(types.SETUSERINFO, d);
  },
  setWxInfo: async ({ commit }: any, d: any) => {
    commit(types.SETWXINFO, d);
  },
};
