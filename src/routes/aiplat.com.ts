// Index模块
const Index = () => import('@/views/index/index.vue');
// Apps模块
const Apps = () => import('@/views/apps/index.vue');
// donate模块
const Donate = () => import('@/views/donate/index.vue');
// NotFound 发现
const NotFound = () => import('@/views/common/notFound.vue');

// 页面路由
const routes = [
    {path: '/', meta: {auth: false, title: '首页'}, component: Index, name: 'index'},
    {path: '/index', redirect: '/'},
    {path: '/index.htm', redirect: '/'},
    {path: '/index.html', redirect: '/'},
    {path: '/apps', meta: {auth: false, title: '应用展示'}, components: {default: Apps}, name: 'apps'},
    {path: '/apps.html', meta: {auth: false, title: '应用展示'}, components: {default: Apps}, name: 'apps'},
    {path: '/donate', meta: {auth: false, title: '捐赠我们'}, components: {default: Donate}, name: 'donate'},
    {path: '/donate.html', meta: {auth: false, title: '捐赠我们'}, components: {default: Donate}, name: 'donate'},
    {path: '*', meta: {auth: false, title: '发现'}, components: {default: NotFound}, name: 'notFound'},
];

export default routes;
