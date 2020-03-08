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

const isPro = process.env.NODE_ENV === 'production';
console.log('Run ip:', getIP());

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: undefined,
  lintOnSave: false,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: !isPro,
  crossorigin: undefined,
  integrity: false,
  configureWebpack: cfg => {
    if (process.env.NODE_ENV === 'production') {
      cfg.performance = {
        hints: 'warning',
        maxEntrypointSize: 20480000,
        maxAssetSize: 20480000,
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        }
      };
      cfg.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['ts', 'js', 'css'].join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
    }
    cfg.resolve.alias = {
      ...cfg.resolve.alias, // 添加现有的别名，
      assets: './src/assets',
      builds: './src/builds',
      components: './src/components',
      plugins: './src/plugins',
      projects: './src/projects',
      routes: './src/routes',
      service: './src/service',
      static: './src/static',
      views: './src/views',
      vuexStore: './src/vuexStore',
    };
  },
  chainWebpack: () => { },
  css: {
    requireModuleExtension: true,
    extract: isPro,
    sourceMap: !isPro
  },
  devServer: {
    open: true,
    // host: getIP(),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 2020,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: null
  },
  parallel: require('os').cpus().length > 1,
  pwa: {
    name: 'aiplat.com',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'img/icons/icon.png',
      favicon16: 'img/icons/icon.png',
      appleTouchIcon: 'img/icons/icon.png',
      msTileImage: 'img/icons/icon.png'
    }
  },
};
