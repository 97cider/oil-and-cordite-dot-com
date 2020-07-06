'use strict';

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: [
      './src/main.js'
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          },
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
}