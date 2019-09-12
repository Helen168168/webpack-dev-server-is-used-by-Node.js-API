const webpack = require('webpack');
const config = require('../config')
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.conf');
webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:8081/", 'webpack/hot/dev-server');
const options = {
  contentBase: config.dev.assetsPublicPath,
  hot: true,
  inline: true,
  disableHostCheck: true,
  stats: { 
    colors: true 
  }
}
webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);
server.listen(8081, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8081');
});