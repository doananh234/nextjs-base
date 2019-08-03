/* eslint-disable */
require('dotenv').config();

const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const themeConfig = require('./config/theme');
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './static/assets/antCustom.less'),
    'utf8'
  )
);

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = {};

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: Object.assign(themeVariables, {
      '@primary-color': themeConfig.primary,
      '@layout-header-background': themeConfig.primary,
      '@layout-footer-background': themeConfig.background.content,
      '@card-radius': '20px',
    }), // make your antd custom effective
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
});
