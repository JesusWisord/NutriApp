const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    App: path.resolve(__dirname, 'src/index.jsx'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.DllReferencePlugin({
      manifest: ('./modules-manifest.json'),
    }),
  ],
};
