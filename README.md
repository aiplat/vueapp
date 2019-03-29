# vueapp
## vue-cli3 typescript版本
 - vue-cli3+vuex+cmui+html5+css3+typescript+webpack+tslint
 - 适合开发各种webapp
 - aiplat.com开源框架来自vue-cli
 - cmui仓库为https://github.com/aiplat/cmui.git
 - 结合hbuilder打包，可以直接做成全平台应用。例如 亲信地铁（vueapp） 腾讯应用宝或苹果appstore搜索‘亲信地铁’、web访问http://m.aiplat.com/metro

 - 代码实例：       ai智能空间vue版     https://aiplat.com
 - 实例相对应网站1：ai智能空间react版   http://react.aiplat.com
 - 实例相对应网站2：ai智能空间angular版 http://ajs.aiplat.com
 - 实例相对应网站3：ai智能空间nervjs版  http://nerv.aiplat.com

 - vue-cli2版本为 https://github.com/aiplat/uniapp/tree/vuecli2 的vuecli2分支

 - 另外 全平台框架: https://github.com/aiplat/uniapp

---

# 代码目录结构

 - dist            ------npm run build后实际布署代码目录
 - public          ------index.html等目录
 - src             ------代码主体目录
 - --- assets      ------静态css、images文件目录
 - --- components  ------公共组件目录
 - --- plugins     ------公共函数或插件目录
 - --- routes      ------路由配置目录
 - --- service     ------公共配置目录
 - --- views       ------路由对应页面视图目录
 - --- vuex        ------store目录
 - --- App.vue     ------应用承载文件
 - --- main.ts     ------应用入口文件
 - tests           ------测试目录

---

# clone
 - $ git clone https://github.com/aiplat/vueapp.git

# 安装依赖
 - $ cd vueapp
 - $ npm install

# 开发模式(实时刷新)
 - $ npm run dev
 -
 - App running at:
 - Local:   http://本地IP:3003/
 - Network: http://本地IP:3003/

# 打包项目
 - $ npm run build
 - 整个项目代码打包到dist目录，打开其中index.html就是项目 首页
 - 布署到服务器，直接将dist目录中文件放在服务器根目录

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
