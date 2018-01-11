#vueapp
##vue2+vue-router+vuex+webpack
##实例网站：aiplat.com
##aiplat.com开源框架自vue-cli

#开发指南

#clone
##$ git clone https://github.com/womendi/vueapp.git


#安装依赖
##$ cd vueapp
##$ npm install -g cnpm --registry=https://registry.npm.taobao.org
##$ cnpm install
###或者cd之后直接$  npm  install


#开发模式(实时刷新)
##$ npm run dev
##打开 http://localhost:3003
##或打开 http://具体ip:3003，方便手机在局域网访问


#打包项目
##$ npm run build
##整个项目代码打包到dist目录，打开其中index.html就是项目 首页
##布署到服务器，直接将dist目录中文件放在服务器根目录