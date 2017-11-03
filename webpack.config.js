var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.resolve(__dirname, './app/app.module.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'file-loader?name=[name].[ext]&publicPath=../fonts/&outputPath=/assets/fonts/'
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=/assets/images/[name].[ext]' },
      {
        test: /\.(html)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(json)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  devServer: {
    stats: 'minimal',
    port: 9000
    // proxy: {
    //   '*': 'http://localhost:8080'
    // }
  },
  plugins: [
    new ExtractTextPlugin('assets/css/styles.css'),
    new CopyWebpackPlugin([]),
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({ 'window.jQuery': 'jquery' }),
    new webpack.DefinePlugin({
      SERVICE_ENDPOINT: JSON.stringify('http://alan.cese.nsw.gov.au/swagger-ui.html')
    })
  ]
};
