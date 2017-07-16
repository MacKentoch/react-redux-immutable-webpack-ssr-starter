// @flow weak

import moment                 from 'moment';
import  fakeData              from '../../mock/fakeAPI.json';
import { appConfig }          from '../../config';
import { getLocationOrigin }  from '../../services/API/fetchTools';
import {
  fromJS,
  List,
  Map
}                             from 'immutable';

// --------------------------------
// CONSTANTS
// --------------------------------
const REQUEST_FAKE_FETCH  = 'REQUEST_FAKE_FETCH';
const RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
const ERROR_FAKE_FETCH    = 'ERROR_FAKE_FETCH';

// --------------------------------
// REDUCER
// --------------------------------
const initialState = fromJS({
  isFetching: false,
  actionTime: '',
  data:       new List(),
  error:      new Map()
});

export default function (state = initialState, action) {
  const currentTime = moment().format();

  switch (action.type) {
  case REQUEST_FAKE_FETCH:
    return state.merge({
      actionTime: currentTime,
      isFetching: true
    });

  case RECEIVED_FAKE_FETCH:
    return state
      .merge({
        actionTime: currentTime,
        isFetching: false
      })
      .set('data', fromJS(action.payload));

  case ERROR_FAKE_FETCH:
    const error = action.error ? fromJS(action.error) : new Map();

    return state
      .merge({
        actionTime: currentTime,
        isFetching: false
      })
      .set('error', error);

  default:
    return state;
  }
}

// --------------------------------
// ACTIONS CREATORS
// --------------------------------
function fakeFetch() {
  return dispatch => {
    const shouldFetchMock = appConfig.DEV_MODE;
    const fetchType       = shouldFetchMock ? 'FETCH_MOCK': 'FETCH';
    const mockResult      = fakeData;
    
    const url     = `${getLocationOrigin()}/${appConfig.api.fakeEndPoint}`;
    const method  = 'get';
    const options = {};

    // fetch middleware 
    // -> you handle pure front (with mock data) or with back-end asyncs just by dispatching a single object
    //   -> just change config: appConfig.DEV_MODE
    return Promise.resolve(
      dispatch({
        // type name is not important here since fetchMiddleware will intercept this action:
        type: 'FETCH_MIDDLEWARE',
        // here are fetch middleware props:
        fetch: {
          type: fetchType,
          actionTypes: {
            request:  REQUEST_FAKE_FETCH,
            success:  RECEIVED_FAKE_FETCH,
            fail:     ERROR_FAKE_FETCH
          },
          // props only used when type = FETCH_MOCK:
          mockResult,
          // props only used when type = FETCH:
          url,
          method,
          options
        }
      })
    );
  };
}

export function fakeFetchIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFakeFetch(getState())) {
      return dispatch(fakeFetch());
    }
    return Promise.resolve();
  };
}
function shouldFakeFetch(state) {
  const isFetching = state.getIn(['fakeModuleWithFetch', 'isFetching']);

  if (isFetching) {
    return false;
  }
  return true;
}
