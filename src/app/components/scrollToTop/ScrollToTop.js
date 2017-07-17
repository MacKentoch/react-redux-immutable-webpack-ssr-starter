// @flow weak

import React, {
  PureComponent
}                 from 'react';
import PropTypes  from 'prop-types';

class ScrollToTop extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.string
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
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

export default ScrollToTop;
