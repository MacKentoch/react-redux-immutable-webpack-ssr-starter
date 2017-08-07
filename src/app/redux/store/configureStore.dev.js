// @flow weak

import {
  createStore,
  // compose,
  applyMiddleware
}                               from 'redux';

import { createLogger }         from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import fetchMiddleware          from '../middleware/fetchMiddleware';
import { composeWithDevTools }  from 'redux-devtools-extension';

const loggerMiddleware = createLogger({
  level:     'info',
  collapsed: true,
  stateTransformer: state => state.toJS()
});

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    fetchMiddleware,
    loggerMiddleware
  ) // logger after thunk to avoid undefined actions
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  // checks if webpack HMR:
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default)
    );
  }

  return store;
}
