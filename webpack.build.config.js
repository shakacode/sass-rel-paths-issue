const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const buildPath = (
  process.env.BUILD_PATH_REL ? './build' : path.join(__dirname, 'build')
);

const styles = (
  process.env.BS_STYLES ? 'bootstrap-loader/extractStyles' : './app/styles.js'
);

module.exports = {

  entry: [ styles, './app/app.js' ],

  output: {
    path: buildPath,
    filename: 'app.js',
  },

  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true }),
  ],

  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass') },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000&name=[name]-[hash].[ext]' },
      { test: /\.(ttf|eot)$/, loader: 'file?name=[name]-[hash].[ext]' },
    ],

  },

}
