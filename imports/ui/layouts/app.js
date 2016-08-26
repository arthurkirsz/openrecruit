import React from 'react';
import { composeWithTracker } from 'react-komposer';
import AppNavigation from '../containers/app-navigation';

export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return <div>
      <AppNavigation />
      <div>
        { this.props.children }
      </div>
    </div>;
  }
});