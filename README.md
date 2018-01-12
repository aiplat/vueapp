#vueapp
<br>##vue2+vue-router+vuex+webpack+cmui
<br>##实例网站：aiplat.com
<br>##aiplat.com开源框架来自vue-cli
<br>##cmui仓库为https://github.com/womendi/cmui.git
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
<br>Listening on http://192.168.1.14:3003
<br>Run successfully.
<br>最后看到以下这句 表示webpack编译成功
<br>webpack: Compiled successfully.
<br>
<br>##打开 http://localhost:3003
<br>##或打开 http://具体ip:3003，方便手机在局域网访问
<br>
<br>
<br>#打包项目
<br>##$ npm run build
<br>##整个项目代码打包到dist目录，打开其中index.html就是项目 首页
<br>##布署到服务器，直接将dist目录中文件放在服务器根目录