/* eslint no-console:0 */
/* eslint no-process-env:0 */
// @ flow weak

'use strict';

const express       = require('express');
const path          = require('path');
const chalk         = require('chalk');
const bodyParser    = require('body-parser');
const helmet        = require('helmet');
const compression   = require('compression');
const PrettyError   = require('pretty-error');
const Promise       = require('bluebird');
const serialize     = require('serialize-javascript');
const morgan        = require('morgan');

// isomorphic:
import React              from 'react';
import { renderToString } from 'react-dom/server';
import moment             from 'moment';
import { StaticRouter }   from 'react-router';
import { Provider }       from 'react-redux';
import configureStore     from '../../../app/redux/store/configureStore';
import { fromJS }         from 'immutable';
import App                from '../../../app/containers/app/App';


const DOCS_PATH = '../../../../docs';
const PORT      = 8083;
const IP_ADRESS = 'localhost';

const app       = express();

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);

// not mandatory but better looking console errors
const pe  = new PrettyError();
pe.start();

app.use(helmet());          // ensure app security
app.use(compression());     // gzip compress if bowser supports it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// if you need logs (note: uncomment line 11 too):
app.use(morgan('combined'));

app.use('/assets', express.static(path.resolve(__dirname, DOCS_PATH, 'public/assets/')));

// IMPORTANT: '/*' and not '/' 
// since you want browser refresh (= first render) to work from any route of the application
app.get('/*', serverRender);

/** ========================================================
*    error management
======================================================== */
// catch error 404:
app.use(
  (req, res, next) => {
    console.log('req.url: ', req.url);
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  }
);

/* eslint-disable no-unused-vars */
app.use(
  (err, req, res, next) => {
    if (err.status === 404) {
      res.status(404).send('Sorry nothing here for now...');
    }
    console.error(err);
    res.status(500).send('internal server error');
  }
);

/* eslint-enable no-unused-vars */
/* ======================================================= */
// $FlowIgnore
// launch server:
app.listen(
  PORT,
  IP_ADRESS,
  () => console.log(`
    =====================================================
    -> Server (${chalk.bgBlue('SSR')}) 🏃 (running) on ${chalk.green(IP_ADRESS)}:${chalk.green(PORT)}
    =====================================================
  `)
);

module.exports = app; // export app just for testing purpose


function serverRender(req, res) {
  const location      = req.url;
  const context       = {};
  // const memoryHistory = createHistory(req.path);
  let store           = configureStore(); // NOTE: store is immutable
  // const history       = syncHistoryWithStore(memoryHistory, store);

  // just for demo, replace with a "usefull" async. action to feed your state
  return fakeFetch()
    .then(
      ({ info }) => {
        const currentTime     = moment().format();
        const currentState    = store.getState(); 
        
        const currentViewsState = currentState.get('views');
        const updatedViewState  = currentViewsState
                                  .set('somePropFromServer', info)
                                  .set('serverTime', currentTime);

        const preWarmedState  = currentState.set('views', updatedViewState);
        
        // //JS would be then:
        // preWarmedState = {
        //   ...currentState,
        //   views: {
        //     ...currentState.views,
        //     somePropFromServer: info,
        //     serverTime:         currentTime
        //   }
        // };

        // update store to be preloaded:
        store = configureStore(preWarmedState);
        
        const InitialView = (
          <Provider store={store}>
            <StaticRouter
              location={location}
              context={context}>
              <App />
            </StaticRouter>
          </Provider>
        );

        let html = '';
        try {
          html = renderToString(InitialView);
        } catch (error) {
          console.error('error: renderToString failed: ', error);
        }

        if (context.url) {
          return res.status.end({ location: context.url });
        }

        const preloadedState = serialize(store.getState().toJS()); // serialize is better than JSON.stringify

        return res
          .status(200)
          .set('content-type', 'text/html')
          .send(renderFullPage(html, preloadedState));
      }
    )
    .catch((error) => res.status(500).end('Internal server error: ', error));
}

function fakeFetch() {
  return new Promise((resolve) => setTimeout(() => resolve({ info: 'whats up?' }), 200));
}

function renderFullPage(html, preloadedState = '') {
  // NOTE:
  // <section id="root">
  //   ${html}
  // </section>
  // will throw warning related to: https://stackoverflow.com/questions/34060968/react-warning-render
  //
  // so write this way to fix: 
  // <section id="root">${html}</section> 
  const indexHtml = {
    template: `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React redux router SSR Starter</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="react redux router SSR">
        <meta name="author" content="Erwan DATIN">
        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/assets/app.styles.css">
      </head>
      <body class="skin-black" style="background-color:#f1f2f7">
        <section id="root"><div>${html}</div></section>
        <script type="text/javascript">window.__PRELOADED_STATE__ = ${preloadedState}</script>
        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>
        <script type="text/javascript" src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
  };
  return indexHtml.template;
}