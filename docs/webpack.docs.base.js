const { resolve } = require('path')
const webpack = require('webpack')
const Package = require('../package.json')

const publicPath = resolve(__dirname, '..', 'docs')

module.exports = {
  name: 'documentation',
  context: __dirname,
  target: 'web',
  entry: {
    docs: './app/index.js',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.md'],
    alias: {
      '@ui/pattern-library': resolve(__dirname, '../src/'),
    },
    modules: [
      'node_modules',
      resolve(__dirname, './node_modules'),
      resolve(__dirname, './../node_modules'),
      resolve(__dirname, './../src/'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      {
        test: /.md$/,
        include: [
          resolve(__dirname, './../src'),
          resolve(__dirname, './app'),
        ],
        use: ['html-loader?removeComments=false', 'highlight-loader', 'markdown-loader'],
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(Package.version),
    })
  ],
}
