/**
 * aiplat.com 项目路由
 */
const routes = [
    {path: '/', redirect: '/index.html'},
    {path: '/index.', redirect: '/index.html'},
    {path: '/index.htm', redirect: '/index.html'},
    {
        path: '/index.html',
        name: 'index',
        component: () => import('@/views/aiplat.com/index/index.vue'),
        meta: {auth: false, title: '首页'},
    },
    {path: '/apps', redirect: '/apps.html'},
    {path: '/apps.htm', redirect: '/apps.html'},
    {
        path: '/apps.html',
        name: 'apps',
        component: () => import('@/views/aiplat.com/apps/index.vue'),
        meta: {auth: false, title: '应用展示'},
    },
    {path: '/donate', redirect: '/donate.html'},
    {path: '/donate.htm', redirect: '/donate.html'},
    {
        path: '/donate.html',
        name: 'donate',
        component: () => import('@/views/aiplat.com/donate/index.vue'),
        meta: {auth: false, title: '捐赠我们'},
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('@/views/common/notFound.vue'),
        meta: {auth: false, title: '发现'},
    },
];

export default routes;
