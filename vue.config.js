const path = require('path');
module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        port: 9999,
        //  contentBase: path.join(__dirname, "dist"),
        proxy: null, // 设置代理
        open: true,
    },
    lintOnSave: false,
    chainWebpack: (config) => {
        config.entry.app = ["babel-polyfill", "./src/main.js"],//babel-polyfill 来将 ES6 的语法转到 ES5，作用为在IE 中使用 axios
            config.resolve.alias
                .set('@', path.join(__dirname, 'src'))//设置别名
    },
    transpileDependencies: ['vue-clamp', 'resize-detector']
}
