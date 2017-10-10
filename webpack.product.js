const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonConfig = require('./webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const publicConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    //清除dist文件夹
    new CleanWebpackPlugin(['dist']),
    //压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),   
    //显示打包具体信息(包含各个模块的比重)
    new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '0.0.0.0',
        analyzerPort: 8080
    })
  ]

};

module.exports = merge(commonConfig, publicConfig);
