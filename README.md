# initproject

> my project for practicing

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

operation steps
first step: create your project using vue-cli framwork
second step: create a file named dev-serser.js in the build folder, update command "test:dev  'node build/dev-server'" in the script in the package.json file.
third step: add seeting in the dev-server.js file according your project demand.

notice: you must add "webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:port/");" in dev-derver file.

