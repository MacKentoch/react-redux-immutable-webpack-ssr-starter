// @flow weak

import React, {
  PureComponent
}                 from 'react';
import PropTypes  from 'prop-types';
import {
  withRouter
}                 from 'react-router-dom';

class ScrollToTop extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  componentDidUpdate(prevProps) {
    const { location: nextLocation } = this.props;
    const { location: prevLocation } = prevProps;

    if (nextLocation !== prevLocation) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    );
  }
}

export default withRouter(ScrollToTop);
