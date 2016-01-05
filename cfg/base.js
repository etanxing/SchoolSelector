'use strict';
let path = require('path');
let port = 8000;
let srcPath = path.join(__dirname, '/../src');
let publicPath = '/assets/';
let additionalPaths = [];

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = {
  additionalPaths: additionalPaths,
  port: port,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    noInfo: false
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    alias: {
      actions: srcPath + '/actions/',
      components: srcPath + '/components/',
      sources: srcPath + '/sources/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: srcPath,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.css/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|jpg|gif|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.json/,
      loader: 'json-loader'
    }]
  },
  postcss: function plugins(bundler) {
    return [
      require('postcss-import')({
        addDependencyTo: bundler
      }),
      require('precss')(),
      require('autoprefixer')({
        browsers: AUTOPREFIXER_BROWSERS
      }),
    ];
  },
};
