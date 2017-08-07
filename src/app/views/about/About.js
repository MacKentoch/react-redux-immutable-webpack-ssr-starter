// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {
  Jumbotron
}                     from '../../components';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { Link }       from 'react-router-dom';

class About extends PureComponent {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views:
    currentView:  PropTypes.string.isRequired,
    enterAbout:   PropTypes.func.isRequired,
    leaveAbout:   PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterAbout } = this.props;
    enterAbout();
  }

  componentWillUnmount() {
    const { leaveAbout } = this.props;
    leaveAbout();
  }

  render() {
    return(
      <AnimatedView>
        <Jumbotron>
          <h1>
            About
          </h1>
          <p>
            <Link
              className="btn btn-success btn-lg"
              to={'/'}>
              <i className="fa fa-info" />
              &nbsp;
              go to home
            </Link>
          </p>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default About;
