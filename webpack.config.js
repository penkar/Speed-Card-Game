var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    'bundle.js':'./src/index.js',
  },
  output: {
    path: __dirname,
    filename: './dist/[name]'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    },{
      test:/\.jpg$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'url-loader'
      }
    },{
      test: /\.html$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'html-loader'
      }
    },{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
      }
    }]
  },
  devtool: 'source-map',
  watch: true
}