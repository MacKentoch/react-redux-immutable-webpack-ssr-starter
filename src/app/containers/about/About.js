// @flow weak

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { About }              from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView: state.getIn(['views', 'currentView'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterAbout: viewsActions.enterAbout,
      leaveAbout: viewsActions.leaveAbout
    },
    dispatch
  );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(About);
