/**
 * Created by daijiaru on 2016/9/18.
 */
let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index:'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        weather: "./app/weather.js"
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', 'jsx'],
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
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000'},
            { test: /\.woff2?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.json$/, loader: 'json'}
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']
        })
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            test: /(\.jsx|\.js)$/,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js', '[name]'),
        /*ProvidePlugin 插件可以定义一个共用的入口，比如 下面加的 React ,他会在每个文件自动
        require了react，所以你在文件中不需要 require('react')，也可以使用 React。*/
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            $:'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ]
};