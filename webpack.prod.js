const path = require('path') 
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:"./src/client/index.js",
    mode:"production",
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath:path.resolve(__dirname,'dist'),
        filename:"main.js"
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:'/\.js$/',
                exclude:/node_modules/,
                loader:'babel-loaader'
            },
            { 
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:path.join(__dirname,'src/client/views/index.html'),
            filename:"./index.html",
        })
    ],
}
