import FastClick from 'fastclick'

// 全局jquery
window.jQuery = window.$ = require('jquery/dist/jquery.min.js')

// 全局cmapp
window.cm = require('./cmapp')()

// 全局vue api
window.va = require('./vueapi')()

// cookie
window.coki = require('./cookie')()

FastClick.attach(document.body)

// 输入框在虚拟键盘弹出时，自动滚动到可见位置
document.body.addEventListener('click', function (event) {
  var element = event.target
  var tags = {
    'INPUT': 1,
    'TEXTAREA': 1
  }
  if ((element.tagName in tags)) {
    setTimeout(function () {
      element.scrollIntoViewIfNeeded()
      // console.log('scrollIntoViewIfNeeded');
    }, 400)
  }
}, false)

export default window
