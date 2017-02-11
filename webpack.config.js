var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var isDev = process.env.NODE_ENV == 'dev'
var publicPath = isDev ? 'http://127.0.0.1:8081/js/' : './js/'
var chunkFilename = isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js'
var filename = isDev ? 'index.js' : 'index.[chunkhash:8].js'

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    publicPath,
    chunkFilename,
    filename
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015-loose']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        'API_ENV': JSON.stringify(process.env.API_ENV || 'remote')
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './index.html'
    })
  ]
}
