const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/dev-server',
    'bootstrap-loader',
    './app/app.js',
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/public/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
    ],

  },

}
