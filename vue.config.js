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
    devServer: {
        open: true,
        host: '127.0.0.1',
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
