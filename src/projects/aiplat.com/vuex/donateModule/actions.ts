import * as types from '@/projects/aiplat.com/vuex/donateModule/mutations_types';

export default {
  setDnid: ({ commit }: any, d: any) => {
    commit(types.SETDNID, d);
  },
};
