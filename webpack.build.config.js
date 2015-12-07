const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const buildPath = (
  process.env.BUILD_PATH_REL ? './build' : path.join(__dirname, 'build')
);

module.exports = {

  entry: [
    'bootstrap-loader/extractStyles',
    './app/app.js',
  ],

  output: {
    path: buildPath,
    filename: 'app.js',
  },

  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true }),
  ],

  module: {
    loaders: [
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
    ],

  },

}
