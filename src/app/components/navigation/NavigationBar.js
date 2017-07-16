// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import Humburger          from './humburger/Humburger';
import LeftNav            from './leftNav/LeftNav';
import RightNav           from './rightNav/RightNav';
import * as Immutable     from 'immutable';

class NavigationBar extends PureComponent {
  static propTypes = {
    brand:                    PropTypes.string,
    handleLeftNavItemClick:   PropTypes.func,
    handleRightNavItemClick:  PropTypes.func,

    navModel: PropTypes.instanceOf(Immutable.Map)
    // not immutable version of navModel would be described like:
    // navModel:  PropTypes.shape({
    //   leftLinks:  PropTypes.arrayOf(
    //     PropTypes.shape({
    //       label: PropTypes.string.isRequired,
    //       link : PropTypes.string.isRequired
    //     })
    //   ).isRequired,
    //   rightLinks:  PropTypes.arrayOf(
    //     PropTypes.shape({
    //       label: PropTypes.string.isRequired,
    //       link : PropTypes.string.isRequired
    //     })
    //   ).isRequired
    // })
  };

  static defaultProps  = {
    brand  : 'brand'
  };

  render() {
    const {
      brand,
      navModel,
      handleLeftNavItemClick,
      handleRightNavItemClick
    } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="containersCustom">
          <div className="navbar-header">
            <Humburger />
            <a className="navbar-brand">
              {brand}
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <LeftNav
                leftLinks={navModel.get('leftLinks')}
                onLeftNavButtonClick={handleLeftNavItemClick}
              />
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <RightNav
                rightLinks={navModel.get('rightLinks')}
                onRightNavButtonClick={handleRightNavItemClick}
              />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
