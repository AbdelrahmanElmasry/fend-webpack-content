const path = require('path') 
const webpack = require('webpack')

module.exports = {
    entry:"./src/client/index.js",
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
    devServer:{
        contentBase: [path.resolve(__dirname),path.join(__dirname, 'src/client/views'),path.join(__dirname, 'src/client/')],
        watchContentBase: true,
        open: true,
        host: "localhost",
        port:8888,
        watchOptions: {
            ignored: "/node_modules/"
          },
    }
}
