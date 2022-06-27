/**
 * aiplat.com 项目路由
 */
const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('@/projects/aiplat.com/views/index/index.vue'),
        meta: { auth: false },
    },
    { path: '/index', redirect: '/' },
    { path: '/index.htm', redirect: '/' },
    { path: '/index.html', redirect: '/' },
    // {
    //     path: '/beian',
    //     name: '备案',
    //     component: () => import('@/projects/aiplat.com/views/common/beian.vue'),
    //     meta: { auth: false },
    // },
    { path: '/apps', redirect: '/apps.html' },
    { path: '/apps.htm', redirect: '/apps.html' },
    {
        path: '/apps.html',
        name: '应用展示',
        component: () => import('@/projects/aiplat.com/views/apps/index.vue'),
        meta: { auth: false },
    },
    { path: '/donate', redirect: '/donate.html' },
    { path: '/donate.htm', redirect: '/donate.html' },
    {
        path: '/donate.html',
        name: '捐赠我们',
        component: () => import('@/projects/aiplat.com/views/donate/index.vue'),
        meta: { auth: false },
    },
    { path: '/our', redirect: '/our.html' },
    { path: '/our.htm', redirect: '/our.html' },
    {
        path: '/our.html',
        name: '关于我们',
        component: () => import('@/projects/aiplat.com/views/our/index.vue'),
        meta: { auth: false },
    },
    {
        path: '*',
        name: '发现',
        component: () => import('@/views/common/notFound.vue'),
        meta: { auth: false },
    },
];

export default routes;
