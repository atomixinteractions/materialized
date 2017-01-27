const { resolve } = require('path')
const webpack = require('webpack')

const appSrc = resolve(__dirname, '..', 'src')
const publicPath = resolve(__dirname, '..', 'public')

module.exports = {
  name: 'material.ui',
  context: appSrc,
  target: 'web',
  entry: {
    index: './index.js',
    atoms: './atoms/index.js',
    themes: './themes/index.js',
  },
  output: {
    path: resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      appSrc,
      'node_modules',
    ],
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    'ramda': 'ramda',
  },
  plugins: [
  ],
}
