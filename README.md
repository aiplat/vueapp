#vueapp
<br>##vue2+vue-router+vuex+webpack+cmui
<br>##适合开发各种webapp
<br>##aiplat.com开源框架来自vue-cli
<br>##cmui仓库为https://github.com/womendi/cmui.git
<br>##代码实例：ai智能空间  http://www.aiplat.com 
<br>##跨平台应用：腾讯应用宝或苹果appstore搜索‘亲信地铁’、web访问http://m.aiplat.com/metro
<br>
<br>
#代码目录结构--与vueapp类似

 - build           ------webpack配置目录
 - config          ------webpack打包配置目录
 - mock            ------mock配置目录
 - src             ------代码主体目录
 - --- api         ------静态json目录
 - --- assets      ------静态css、images文件目录
 - --- components  ------react公共组件目录
 - --- plugins     ------公共函数或插件目录
 - --- routes      ------路由配置目录
 - --- views       ------路由对应页面视图目录
 - --- vuex        ------vuex，store目录
 - --- app.vue     ------应用承载文件
 - --- main.js     ------应用入口文件
 - static          ------静态资源目录
 - index.html      ------单页面应用公共html入口文件
<br>
<br>
<br>#指南
<br>
<br>#clone
<br>##$ git clone https://github.com/womendi/vueapp.git
<br>
<br>
<br>#安装依赖
<br>##$ cd vueapp
<br>##$ npm install -g cnpm --registry=https://registry.npm.taobao.org
<br>##$ cnpm install
<br>###或者cd之后直接$  npm  install
<br>
<br>
<br>#开发模式(实时刷新)
<br>##$ npm run dev
<br>
<br>Listening on http://本机ip:3003
<br>Run successfully.
<br>最后看到以下这句 表示webpack编译成功
<br>webpack: Compiled successfully.
<br>
<br>##打开 http://localhost:3003
<br>##或打开 http://本机ip:3003，方便手机在局域网访问
<br>
<br>
<br>#打包项目
<br>##$ npm run build
<br>##整个项目代码打包到dist目录，打开其中index.html就是项目 首页
<br>##布署到服务器，直接将dist目录中文件放在服务器根目录
<br>
<br>
<br>#兼容性
<br>##PC端兼容IE9及以上
<br>##手机端兼容安卓与ios，不区分机型
<br>##兼容一切可联网设备，比如TV等等,不区分尺寸大小
