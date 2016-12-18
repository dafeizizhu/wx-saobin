var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    publicPath: './js/',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    filename: 'index.[chunkhash:8].js'
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
