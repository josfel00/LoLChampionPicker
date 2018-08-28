var webpackMerge = require('webpack-merge');
var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    mode: "development",
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        // content_base: helpers.root('app')
    }
});