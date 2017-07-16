// @flow weak

import { combineReducers }  from 'redux-immutable';
import routerReducer        from './immutableRoute';
import views                from './views';

export {
  views
};

export default combineReducers({
  views,
  routing: routerReducer
});
