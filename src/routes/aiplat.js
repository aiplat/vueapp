//Index模块
const Index  = r => require(['views/index/index'], r);
//Apps模块
const Apps   = r => require(['views/apps/index'], r);
//donate模块
const Donate = r => require(['views/donate/index'], r);

//页面路由
const routes = [
  {path: '/',meta:{auth:false},components: {'default':Index}, name: 'index',title:'首页'},
  {path: '/index',redirect:'/'},
  {path: '/index.html',redirect:'/'},
  {path: '/apps.html',meta:{auth:false},components: {'default':Apps}, name: 'apps',title:'APP下载'},
  {path: '/donate.html',meta:{auth:false},components: {'default':Donate}, name: 'donate',title:'捐赠我们'},
];

const NotFound = r => require(['views/common/404'], r);
routes.push({path: '*', components: {'tsKeep':NotFound}, name: 'notfound',title:'404'});

export default routes;