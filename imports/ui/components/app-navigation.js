import React from 'react';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';

export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header pull-left">
          <Link className="navbar-brand" to="/">OpenRecruit</Link>
        </div>
        { this.renderNavigation(this.props.hasUser) }      
      </div>
    </nav>      
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};
