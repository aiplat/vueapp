import Vue from 'vue';
import Router from 'vue-router';
import envRoutes from '@/projects/aiplat.com/routes/aiplat';
import conf from '@/projects/aiplat.com/conf';

Vue.use(Router);

const routes: any = new Router({
  mode: 'history',
  base: process.env.publicPath,
  routes: envRoutes,
  scrollBehavior(to: any, from: any, savedPosition: any) {
    return savedPosition || { x: 0, y: 0 };
  },
});

routes.beforeEach(async (to: any, from: any, next: any) => {
  const isIndex = to.path === '/' ? '' : ` - ${to.name}`;
  document.title = `${conf.aiplat.name}${isIndex}`;
  next();
});

export default routes;
