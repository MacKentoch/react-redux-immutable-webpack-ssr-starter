// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {
  Jumbotron
}                     from '../../components';
import AnimatedView   from '../../containers/animatedView/AnimatedView';
import { Link }       from 'react-router-dom';

function testTime() {
  return new Promise(
    (resolve) => setTimeout(() => resolve('async-await works'), 200)
  );
}

class Home extends PureComponent {
  static propTypes= {
    currentView:  PropTypes.string.isRequired,
    enterHome:    PropTypes.func.isRequired,
    leaveHome:    PropTypes.func.isRequired
  };

  async componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
    const message = await testTime();
    console.log('valid async await: ', message);
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    return(
      <AnimatedView>
        <Jumbotron>
          <h1>
            React + Redux + Immutable + Bootstrap
          </h1>
          <h2>
            with Hot Reload!!!
          </h2>
          <h2>
            and React Router v4
          </h2>
          <h2>
            and webpack 3.x
          </h2>
          <h1>
            Starter
          </h1>
          <p>
            <Link
              className="btn btn-success btn-lg"
              to={'/about'}>
              <i className="fa fa-info" />
              &nbsp;
              go to about
            </Link>
          </p>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default Home;
