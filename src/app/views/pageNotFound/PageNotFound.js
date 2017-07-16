// @flow weak

import React, {
  PureComponent
}                     from 'react';
import {Jumbotron}    from '../../components';

class PageNotFound extends PureComponent {
  render() {
    return(
      <div>
        <Jumbotron>
          <h1>
            Sorry this page does not exists...
          </h1>
        </Jumbotron>
      </div>
    );
  }
}

export default PageNotFound;
