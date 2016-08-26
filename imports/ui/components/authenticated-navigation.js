import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `Bonjour, ${name.first}` : '';
};

export const AuthenticatedNavigation = () => (
  <div>
    <ul className="nav navbar-nav pull-left">
      <LinkContainer to="/jobs">
        <NavItem eventKey={ 2 } href="/jobs">
          <i className="material-icons">&#xE8F9;</i> Jobs
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/candidates">
        <NavItem eventKey={ 3 } href="/candidates">
          <i className="material-icons">&#xE7FB;</i> Candidats
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/career">
        <NavItem eventKey={ 3 } href="/career">
          <i className="material-icons">&#xE051;</i> Site Carrière
        </NavItem>
      </LinkContainer>
    </ul>  
    <ul className="nav navbar-nav pull-right">
      <NavDropdown eventKey={ 4 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 4.1 } onClick={ handleLogout }>Paramètres</MenuItem>
        <MenuItem eventKey={ 4.1 } onClick={ handleLogout }>Déconnexion</MenuItem>
      </NavDropdown> 
    </ul>   
  </div>
);
