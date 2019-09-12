const webpack = require('webpack');
const config = require('../config')
const path = require('path')
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.conf');
webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:8081/");
const options = {
  contentBase: config.dev.assetsPublicPath,
  hot: true,
  inline:false,
  disableHostCheck: true,
  stats: { 
    colors: true 
  }

}
console.log(webpackConfig);
webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);
server.listen(8081, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8081');
});