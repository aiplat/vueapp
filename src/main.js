import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router/dist/vue-router.min'
import App from './app'

import myPlugin from './plugins/myPlugin'

import storeOption from './vuex/store'
import routes from './routes'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import utils from './plugins/utils'
Vue.use(myPlugin)

// 导入echarts打包后js体积变大，加载会很慢，不建议使用
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'error',
  loading: 'assets/images/commons/icon2.png',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})

utils(Vue)

window.store = new Vuex.Store(storeOption)

window.router = new VueRouter({
  routes: routes,
  hashbang: true
  // mode:'history'
})

var LogSign = 'Loging'
window.thisPage = ''
router.beforeEach((to, from, next) => {
  var len = routes.length
  for (var i = 0; i < len; i++) {
    if (routes[i].path == to.path) {
      document.title = Mconf.name + '-' + routes[i].title
      window.thisPage = routes[i]
      break
    }
  }
  // 登录验证
  if (to.matched.some(m => m.meta.auth)) {
    if (store.state.isLogin == LogSign || cm.getLS('isLogin') == LogSign) {
      if (store.state.isLogin != LogSign) {
        store.commit('isLogin', LogSign)
      }
      next()
    } else {
      next({path: '/mine/log'})
    }
  } else {
    next()
  }
})

window.cmApp = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
