/* eslint no-console:0 */
/* eslint consistent-return:0 */
const path               = require('path');
const webpack            = require('webpack');
const express            = require('express');
const devMiddleware      = require('webpack-dev-middleware');
const hotMiddleware      = require('webpack-hot-middleware');
const config             = require('./webpack.hot.reload.config');

const app       = express();
const compiler  = webpack(config);


app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(hotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
});
