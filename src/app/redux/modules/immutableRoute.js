// @flow weak

import { fromJS } from 'immutable';

// this constant comes from react-redux-router (we are just overriding the reducer)
import { LOCATION_CHANGE } from 'react-router-redux';

// /////////////////
// reducer
// /////////////////
const initialState = fromJS({
  locationBeforeTransitions: null
});

export default function (state = initialState, action) {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }

  return state;
}
