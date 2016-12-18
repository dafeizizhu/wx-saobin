var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './dist/',
    chunkFilename: '[name].chunk.js',
    filename: 'index.js'
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
    })
  ]
}
