const HtmlWebpackPlugin = require('html-webpack-plugin');//用于自动生成html入口文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//将CSS代码提取为独立文件的插件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");//CSS模块资源优化插件

module.exports={
    mode: 'production',
    entry:{
        index:'./src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },

    module: {
        rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]'}

        ]
    },
    plugins:[
        new HtmlWebpackPlugin(),//生成入口html文件
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })//为抽取出的独立的CSS文件设置配置参数
    ]
}
