import * as types from './mutations_types';

export default {
    tsDnid: ({ commit }: any, index: number) => {
        commit(types.TSDNID, index);
    },
};
