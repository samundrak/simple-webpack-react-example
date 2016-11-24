var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        index: './src/main.js',
        about: './src/about.js',
        contact: './src/contact.js',
        commons: ['react', 'react-dom', 'jquery']
    },
    output: {
        publicPath: 'build',
        path: 'build',
        filename: '[name].bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: './',
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
        ]
    },
    plugins: [
        new CommonsChunkPlugin('commons', 'commons.build.js')
    ]
}
;