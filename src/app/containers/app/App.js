// @flow weak

import React, {
  PureComponent
}                             from 'react';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import navigationModel        from '../../models/navigation.json';
import { fromJS }             from 'immutable';
import MainRoutes             from '../../routes/MainRoutes';
import { withRouter }         from 'react-router';

class App extends PureComponent {
  state = {
    navModel : fromJS(navigationModel)
  };

  render() {
    const { navModel } = this.state;

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

  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
}

export default withRouter(App);
