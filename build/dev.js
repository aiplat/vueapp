var path = require('path')
var fs = require('fs')
var argv = require('optimist').argv;
var express = require('express')
var webpack = require('webpack')
var config = require('../config')

var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

var port = process.env.PORT || config.dev.port

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

//var proxyTable = config.dev.proxyTable
// proxy api requests
// Object.keys(proxyTable).forEach(function (context) {
//   var options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(context, options))
// });

// mock/proxy api requests
var mockDir = path.resolve(__dirname, '../mock');
(function setMock(mockDir) {
  fs.readdirSync(mockDir).forEach(function (file) {
    var filePath = path.resolve(mockDir, file);
    var mock;
    if (fs.statSync(filePath).isDirectory()) {
      setMock(filePath);
    }
    else {
      mock = require(filePath);
      app.use(mock.api, argv.proxy ? proxyMiddleware({target: 'http://' + argv.proxy}) : mock.response);
    }
  });
})(mockDir);

app.use(require('connect-history-api-fallback')({
  index: '/index.html'
}))

app.use(devMiddleware)

app.use(hotMiddleware)

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

function getIPAdress(){  
  var interfaces = require('os').networkInterfaces();  
  for(var devName in interfaces){  
        var iface = interfaces[devName];  
        for(var i=0;i<iface.length;i++){  
             var alias = iface[i];  
             if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                   return alias.address;  
             }  
        }  
  }  
} 

//var opn = require('opn')
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var ip=getIPAdress();
  var uri = 'http://'+ip+':' + port
  console.log('Listening on ' +uri);
  console.log('Run successfully.');
  // opn(uri)
})
