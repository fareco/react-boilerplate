const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.config.js');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    //代理
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }
  },
  plugins: [
    //浏览器打开localhost:8080页面
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};

module.exports = merge({
  customizeArray(a, b, key) {
    /*替换entry.app*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);
