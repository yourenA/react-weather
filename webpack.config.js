/**
 * Created by daijiaru on 2016/9/18.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    /*entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],*/
    entry: {
        index:'webpack/hot/dev-server',
        weather: "./app/weather.js"
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.css$/,
                loader: ['style','css']
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};