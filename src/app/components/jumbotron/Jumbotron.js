// @flow weak

import React        from 'react';
import PropTypes    from 'prop-types';

const Jumbotron = (props) => (
  <div className="jumbotron">
    {props.children}
  </div>
);

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default Jumbotron;
