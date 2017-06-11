/*
 ./webpack.config.js
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  output: {
    path: path.resolve('build'),
    filename: 'app.js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test    : /\.scss$/,
        use : ExtractTextPlugin.extract({
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.bundle.css',
      allChunks: true,
    }),
  ]
};