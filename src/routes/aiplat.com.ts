/**
 * aiplat.com 项目路由
 */
const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('@/views/aiplat.com/index/index.vue'),
        meta: {auth: false},
    },
    {path: '/index.', redirect: '/'},
    {path: '/index.htm', redirect: '/'},
    {path: '/index.html', redirect: '/'},
    {path: '/apps', redirect: '/apps.html'},
    {path: '/apps.htm', redirect: '/apps.html'},
    {
        path: '/apps.html',
        name: '应用展示',
        component: () => import('@/views/aiplat.com/apps/index.vue'),
        meta: {auth: false},
    },
    {path: '/donate', redirect: '/donate.html'},
    {path: '/donate.htm', redirect: '/donate.html'},
    {
        path: '/donate.html',
        name: '捐赠我们',
        component: () => import('@/views/aiplat.com/donate/index.vue'),
        meta: {auth: false},
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('@/views/common/notFound.vue'),
        meta: {auth: false},
    },
];

export default routes;
