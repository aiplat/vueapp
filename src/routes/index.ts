import Vue from 'vue';
import Router from 'vue-router';
import Aiplat from './aiplat.com';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.publicPath,
    routes: Aiplat,
    scrollBehavior(to: any, from: any, savedPosition: any) {
        console.log(from.path, to.path, 'savedPosition=>', savedPosition);
        return savedPosition || { x: 0, y: 0 };
    },
});
