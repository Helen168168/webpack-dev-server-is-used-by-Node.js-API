有几个问题需要说明：
1、这里加载了webpack和webpack-dev-server两个模块，这个require默认会从node-modules中去加载。由于我们之前安装时为了方便在命令行下使用，采用了全局安装的方式-g，所以本地并没有安装这个模块。这里需要在当前项目中再进行安装
$ npm install webpack webpack-dev-server

2、在配置文件webpack.config.js中无需再对devServer进行配置，因为我们这样启动服务的话，WebpackDevServer是访问不到webpack中的配置的。但是，我们需要对配置文件的entry进行修改：
entry: ["./src/entry.js"]
以数组方式来写，这样就可以支持多个入口文件。同时在server.js中加入
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");

3、WebpackDevServer支持两个参数，其中第二个参数对WebpackDevServer进行了配置，刚刚提到，WebpackDevServer是访问不到webpack中的配置的，所以这里我们要再设置publicPath。
当然，为了方便处理，一般我们可以统一将WebpackDevServer的配置在webpack.config.js中的devServer中设置，再将devServer作为第二个参数传给WebpackDevServer。如下：

webpack.config.js
module.exports = {
    devServer: {  //这里配置webpack-dev-server
        publicPath: '/dist/'
        //这里还可以加入其它你需要的参数
    },
    entry: ["./src/entry.js"],
    output: {
        path: path.join( __dirname, '/dist'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //....
        ]
    }
};

server.js
var config = require('./webpack.config.js');
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, config.devServer);  //这里将其作为参数传进来
最后运行server.js就可以启动服务了。

$ node server.js
到这里为止，自动刷新的内容基本讲完了。注意到一点，目前自动刷新都是刷新整个页面。
