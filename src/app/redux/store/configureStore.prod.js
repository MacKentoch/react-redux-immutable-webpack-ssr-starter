// @flow weak

import {
  createStore,
  applyMiddleware,
  compose
}                           from 'redux';
import thunkMiddleware      from 'redux-thunk';
import reducer              from '../modules/reducers';
import fetchMiddleware      from '../middleware/fetchMiddleware';

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    fetchMiddleware
  )
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
