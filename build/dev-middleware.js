/**
 * 使用webpack-dev-middleware去启动项目
 * autor
 * 2019-09-18
 */

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack.dev.conf.js');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(config);

config.entry.unshift('webpack-hot-middleware/client');
// Tell express to use the webpack-dev-middleware and use the webpack.dev.conf.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(WebpackHotMiddleware(compiler));

// Serve the files on port 8866.
app.listen(8866, function () {
  console.log('Example app listening on port 8866!\n');
});

