// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';
import * as userAuthActions   from '../../redux/modules/userAuth';
import Login                  from './Login';

const mapStateToProps = (state) => {
  return {
    // views:
    currentView:  state.getIn(['views', 'currentView']),

    // useAuth:
    isAuthenticated: state.getIn(['userAuth', 'isAuthenticated']),
    isFetching:      state.getIn(['userAuth', 'isFetching']),
    isLogging:       state.getIn(['userAuth', 'isLogging'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...viewsActions,
      ...userAuthActions
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
