const { resolve } = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.docs.base')

const publicPath = resolve(__dirname, '..', 'docs')

module.exports = env => webpackMerge(commonConfig, {
  output: {
    pathinfo: false,
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader'),
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Materialized components',
      cache: false,
      showErrors: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
    }),
  ],
})
