import Vue from 'vue';
import Router from 'vue-router';
import envRoutes from '@/projects/giaomeng.com/routes/giaomeng'; // 备案时打包
import conf from '@/projects/giaomeng.com/conf';

Vue.use(Router);

const routes: any = new Router({
    mode: 'history',
    base: process.env.publicPath,
    routes: envRoutes,
    scrollBehavior(to: any, from: any, savedPosition: any) {
        console.log(from.path, to.path, 'savedPosition=>', savedPosition);
        return savedPosition || { x: 0, y: 0 };
    },
});

routes.beforeEach(async (to: any, from: any, next: any) => {
    if (from === 1) {
        console.log(from);
    }
    document.title = `${to.name} - ${conf.giaomeng.name}`;
    next();
});

export default routes;
