/**
 * giaomeng.com 项目路由
 */
const routes = [
    {
        path: '/',
        name: '首页',
        component: () => import('@/projects/giaomeng.com/views/index.vue'),
        meta: { auth: false },
    },
    { path: '/index', redirect: '/' },
    { path: '/index.htm', redirect: '/' },
    { path: '/index.html', redirect: '/' },
    {
        path: '*',
        name: '发现',
        component: () => import('@/views/common/notFound.vue'),
        meta: { auth: false },
    },
];

export default routes;
