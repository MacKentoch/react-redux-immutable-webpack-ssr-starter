// @flow weak

import React, {
  PureComponent
}                           from 'react';
import PropTypes            from 'prop-types';
import LeftNavButton        from './leftNavButton/LeftNavButton';
import * as Immutable       from 'immutable';


class LeftNav extends PureComponent {
  static propTypes = {
    leftLinks: PropTypes.instanceOf(Immutable.List),
    onLeftNavButtonClick: PropTypes.func
  };

  render() {
    const { leftLinks, onLeftNavButtonClick } = this.props;
    return (
      <ul className="nav navbar-nav">
        {
          leftLinks.map(
            (aLinkBtn, index) => {
              return (
                <LeftNavButton
                  key={index}
                  link={aLinkBtn.get('link')}
                  label={aLinkBtn.get('label')}
                  viewName={aLinkBtn.get('view')}
                  onClick={onLeftNavButtonClick}
                />
              );
            }
          )
        }
      </ul>
    );
  }
}

export default LeftNav;
