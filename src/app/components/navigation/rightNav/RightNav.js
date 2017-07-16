// @flow weak

import React, {
  PureComponent
}                           from 'react';
import PropTypes            from 'prop-types';
import RightNavButton       from './rightNavButton/RightNavButton';
import * as Immutable       from 'immutable';

class RightNav extends PureComponent {
  static propTypes = {
    rightLinks:             PropTypes.instanceOf(Immutable.List),
    onRightNavButtonClick:  PropTypes.func
  };

  render() {
    const { rightLinks, onRightNavButtonClick } = this.props;
    return (
      <ul className="nav navbar-nav navbar-right">
        {
          rightLinks.map(
            (aLinkBtn, index) => {
              return (
                <RightNavButton
                  key={index}
                  link={aLinkBtn.get('link')}
                  label={aLinkBtn.get('label')}
                  viewName={aLinkBtn.get('view')}
                  onClick={onRightNavButtonClick}
                />
              );
            }
          )
        }
      </ul>
    );
  }
}

export default RightNav;
