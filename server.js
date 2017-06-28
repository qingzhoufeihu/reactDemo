var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,　　//开启热调试
    historyApiFallback: true,
    compress: true,
    stats: { colors: true }
}).listen(8080, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('server start');
});