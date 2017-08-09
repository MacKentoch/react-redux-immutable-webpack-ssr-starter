// @flow weak

import React, {
  PureComponent
}                             from 'react';
import PropTypes              from 'prop-types';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import navigationModel        from '../../config/navigation.json';
import { fromJS }             from 'immutable';
import MainRoutes             from '../../routes/MainRoutes';
import { withRouter }         from 'react-router';

class App extends PureComponent {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired

  };

  state = {
    navModel : fromJS(navigationModel)
  };

  render() {
    const { navModel } = this.state;
    const { match: { url } } = this.props;

    return (
      <div id="appContainer">
        <NavigationBar
          brand={navModel.get('brand')}
          navModel={navModel}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
        <div className="container-fluid">
          <MainRoutes />
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  handleLeftNavItemClick = (
    event: SyntheticInputEvent,
    viewName: string
  ) => {
    // something to do here?
  }

  handleRightNavItemClick = (
    event: SyntheticInputEvent,
    viewName
  ) => {
    // something to do here?
  }
}

export default withRouter(App);
