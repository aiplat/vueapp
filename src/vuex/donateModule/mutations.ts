import * as types from './mutations_types';

export default {
    [types.TSDNID](state: any, index: number) {
        state.dnid = index;
    },
};
