# vueapp
## vue-cli4 typescript版本
 - vue-cli4+vuex+cmui+html5+css3+typescript+tslint
 - 适合开发各种webapp,全平台框架项目（pc、h5、微信公众号、小程序嵌套h5、安卓与ios应用）
 - aiplat.com开源框架来自vue-cli
 - cmui仓库为https://github.com/aiplat/cmui.git
 - 结合hbuilder打包，可以直接做成全平台应用。例如 亲信地铁（vueapp） 腾讯应用宝或苹果appstore搜索‘亲信地铁’、web访问http://m.aiplat.com/metro

 - 代码实例：       ai智能空间vue版     https://aiplat.com
 - 实例相对应网站1：ai智能空间react版   http://react.aiplat.com
 - 实例相对应网站2：ai智能空间angular版 http://ajs.aiplat.com
 - 实例相对应网站3：ai智能空间nervjs版  http://nerv.aiplat.com
 - 实例相对应网站4：ai智能空间uniapp版  http://uniapp.aiplat.com

 - 另外 全平台框架: https://github.com/aiplat/uniapp

---

# 代码目录结构

 - dist            ------yarn run build后实际布署代码目录
 - public          ------index.html等目录
 - src             ------代码主体目录
 - --- assets      ------公共静态css、images文件目录
 - --- builds      ------运行时生成引用项目配置文件的目录
 - --- components  ------公共组件目录
 - --- plugins     ------公共函数或插件目录
 - --- projects    ------项目主目录
 - ------- aiplat.com    ------子目录：aiplat.com项目
 - ----------- builds    ------配置指向文件目录
 - ----------- components    ------组件目录
 - ----------- routes    ------路由目录
 - ----------- views     ------视图目录
 - ----------- vuex      ------store目录
 - ----------- apis.ts   ------apis配置文件
 - ----------- Business.class.ts    ------业务class方法
 - ----------- components.ts    ------组件配置
 - ----------- conf.ts    ------conf配置文件
 - --- service     ------公共配置目录
 - --- views       ------公共视图目录
 - --- vuexStore   ------store目录
 - --- App.vue     ------应用承载文件
 - --- main.ts     ------应用入口文件
 - tests           ------测试目录

---

# clone
 - $ git clone https://github.com/aiplat/vueapp.git

# 安装依赖
 - $ cd vueapp
 - $ yarn

# 开发模式(实时刷新)
 - $ yarn run dev --env=uat --type=aiplat.com --> 运行uat环境的aiplat.com项目
 - $ yarn run dev --env=ver --type=aiplat.com --> 运行ver环境的aiplat.com项目
 - $ yarn run dev --env=pro --type=aiplat.com --> 运行pro环境的aiplat.com项目
 -
 - App running at:
 - Local:   http://localhost:2020
 - Network: http://本地IP:2020/

# 打包项目
 - $ yarn run build --env=uat --type=aiplat.com --> 打包uat环境的aiplat.com项目
 - $ yarn run build --env=ver --type=aiplat.com --> 打包ver环境的aiplat.com项目
 - $ yarn run build --env=pro --type=aiplat.com --> 打包生产环境的aiplat.com项目
 - 整个项目代码打包到dist目录，打开其中index.html就是项目 首页
 - 布署到服务器，直接将dist目录中文件放在服务器根目录

# src/projects
 - 多项目共存目录
 - 解决多个h5项目多个仓库多个维护的问题，使用同一个仓库公共框架及组件，方便管理与维护

---

# 命令替换

### 可用cnpm代替npm
 - $ npm install -g cnpm --registry=https://registry.npm.taobao.org
 - 然后所有npm * 可用 cnpm *代替
 - 例如 cnpm install 、cnpm install -g ** 、cnpm install --save-dev **

### 可用yarn代替npm
 - 然后所有npm * 可用 yarn具体代码代替
  - 例如 yarn或yarn install 、yarn add **、 yarn add ** --dev

---

# 兼容性
 - PC端兼容IE9及以上
 - 手机端兼容安卓与ios等等各种系统，不区分机型
 - 兼容一切可联网设备，比如TV等等,不区分尺寸大小
