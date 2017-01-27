const { resolve } = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base.js')

const publicPath = resolve(__dirname, '..', 'public')

module.exports = env => webpackMerge(commonConfig, {
  // devtool: 'cheap-eval-source-map',
  output: {
    pathinfo: true,
    publicPath,
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
  ],
  devServer: {
    port: 4900,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath,
  },
})
