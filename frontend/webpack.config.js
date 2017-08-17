const webpack = require('webpack');
const config = require('./webpack.common');


config.plugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': "'dev'" }),
];


config.devtool = 'cheap-module-source-map';


config.devServer = {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
    },
    '/swaggerui': {
      target: 'http://localhost:5000',
    },
  },
};


module.exports = config;
