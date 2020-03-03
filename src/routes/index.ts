import Vue from 'vue';
import Router from 'vue-router';
import Aiplat from './aiplat.com';
import conf from '../projects/aiplat.com/conf';

Vue.use(Router);

const routes:any = new Router({
    mode: 'history',
    base: process.env.publicPath,
    routes: Aiplat,
    scrollBehavior(to: any, from: any, savedPosition: any) {
        console.log(from.path, to.path, 'savedPosition=>', savedPosition);
        return savedPosition || { x: 0, y: 0 };
    },
})

routes.beforeEach((to: any, from: any, next: any) => {
    document.title = `${to.name} - ${conf.name}`;
    next();
});

export default routes;
