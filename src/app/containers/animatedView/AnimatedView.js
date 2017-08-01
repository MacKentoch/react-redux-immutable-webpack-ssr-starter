// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import cx             from 'classnames';
import { withRouter } from 'react-router-dom';

class AnimatedView extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  state: {
    viewEnters: boolean
  }
  
  state = {
    viewEnters: false
  };

  componentDidMount() {
    this.setViewEnters();
  }

  render() {
    const { viewEnters } = this.state;
    
    return (
      <section
        className={
          cx({
            'content':    true,
            'invisible':  !viewEnters,
            'view-enter': viewEnters
          })
        }
      >
        { 
          this.cloneAllChildren()
        }
      </section>
    );
  }

  setViewEnters = () => (this.setState({ viewEnters: true }));

  /**
   * To avoid blocking react-router 4 props passing (specially location)
   * we pass down to any children AnimatedView own props (if router so we pass location down)
   * 
   * @memberof AnimatedView
   * @returns {node}  AnimatedView children node with its own props
   */
  cloneAllChildren = (): Node => {
    const { children } = this.props;

    return React.Children.map(
      children,
      child => (
        React.cloneElement(child, {...child.props, ...this.props})
      )
    );
  }
}

export default withRouter(AnimatedView);
