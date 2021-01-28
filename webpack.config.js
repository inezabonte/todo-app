const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
require('dotenv').config();


module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true,
        clientLogLevel: 'silent',
        inline: true,
        open: true,
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: ['file-loader']
            }
        ]
    }
}