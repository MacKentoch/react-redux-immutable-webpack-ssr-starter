// @flow weak

const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals     = require('webpack-node-externals');

const nodeModulesDir  = path.join(__dirname, 'node_modules');
const indexFile       = path.join(__dirname, 'src/server/SSR/src/server.js');
const publicPath      = path.join(__dirname, 'docs/public');
const ouputDirectory  = path.join(__dirname, 'src/server/SSR');
const outputFile      = 'index.js';


const serverConfig = {
  entry: [
    'babel-polyfill',
    indexFile
  ],
  externals:  [nodeExternals()],
  output: {
    path:           ouputDirectory,
    filename:       outputFile,
    publicPath:     publicPath,
    libraryTarget:  'commonjs2'
  },
  target:     'node',
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test:     /\.jsx?$/,
        exclude:  [nodeModulesDir],
        loader:   'babel-loader'
      },
      {
        test: /\.css$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader:  'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    getImplicitGlobals(),
    setNodeEnv()
  ]
};

/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $:      'jquery',
    jQuery: 'jquery',
    jquery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });
}

module.exports = serverConfig;
