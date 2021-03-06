path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),

    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader',exclude:/node_modules/ },
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }
        ]
    },
   // resolve:{
   //     alias:{"vue$":'vue/dist/vue.js'}
   // }
}