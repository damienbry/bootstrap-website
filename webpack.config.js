const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: '[name].bundle.js'
  },
  devServer: {
    historyApiFallback: {
      rewrites: []
    },
    contentBase: './dist'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'postcss-loader'},
        {loader: 'sass-loader'},
      ]
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './assets', to: 'assets'}
    ]),
    //new ExtractTextPlugin('assets/css/[name].[contenthash].css'),
    new ManifestPlugin()
  ]
};

module.exports = config;

