/**
 * autor
 * practice for Vue-cli project
 * 2019-09-12
 */
const webpack = require('webpack');
const config = require('../config')
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.conf');

const options = {
  contentBase: config.dev.assetsPublicPath,
  hot: true,
  inline: false,
  disableHostCheck: true,
  watchContentBase: true,
  overlay: {
    warnings: true,
    errors: true
  },
  proxy: config.dev.proxyTable,
}
webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:8866/",'webpack/hot/dev-server');
webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);
server.listen(8866, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8866');
});