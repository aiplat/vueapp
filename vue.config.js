const CompressionWebpackPlugin = require('compression-webpack-plugin');
const getIP = () => {
  const interfaces = require('os').networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (const i in iface) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
};

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    modules: true,
    extract: true,
    sourceMap: false,
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
    }
  },
  devServer: {
    open: true,
    host: getIP(),
    port: 3003,
    https: false,
    hotOnly: false,
    proxy: null,
  },
  parallel: require('os').cpus().length > 1,
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/icon.png',
      favicon16: 'img/icons/icon.png',
      appleTouchIcon: 'img/icons/icon.png',
      msTileImage: 'img/icons/icon.png'
    }
  },
};
