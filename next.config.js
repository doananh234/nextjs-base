/* eslint-disable */
require('dotenv').config();

const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
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

module.exports = withCSS(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: Object.assign(themeVariables, {
      '@primary-color': themeConfig.primary,
      '@layout-header-background': themeConfig.primary,
      '@layout-footer-background': themeConfig.background.container,
      '@card-radius': '10px',
      '@body-background': themeConfig.background.content,
      '@btn-font-weight': 700,
      '@btn-border-radius-base': 4,
      "@card-head-color": themeConfig.text.title,
      '@card-head-padding': '20px',
      '@card-padding-base': '20px',
      "@tabs-horizontal-padding": "20px"
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
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false
            }
          }
        }
      }],
    });

    return config;
  },
}));
