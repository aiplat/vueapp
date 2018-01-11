//全局jquery
window.jQuery = window.$ = require('jquery/dist/jquery.min.js');

//全局cmweb
var cmweb= require('./cmapp');
window.cm= cmweb();
//全局cmweb

//全局vue api
var vueapi= require('./vueapi');
window.va= vueapi();
//全局vue api

//cookie
var coki= require('./cookie');
window.coki= coki();

// 输入框在虚拟键盘弹出时，自动滚动到可见位置
document.body.addEventListener('click', function (event) {
  var element = event.target;
  var tags = {
    'INPUT': 1,
    'TEXTAREA': 1,
  }
  if ((element.tagName in tags) ) {
    setTimeout(function(){
      element.scrollIntoViewIfNeeded();
      // console.log('scrollIntoViewIfNeeded');
    }, 400);
  }
}, false);

export default window;