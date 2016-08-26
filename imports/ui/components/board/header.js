import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export const BoardHeader = ({ job }) => (
  <nav className="navbar navbar-default board-header">
	  <div className="container-fluid">
			<ul className="nav navbar-nav pull-left">
				<LinkContainer to="/jobs">
					<NavItem eventKey={ 2 } href="/jobs">
						<i className="material-icons">&#xE8F9;</i> Jobs
					</NavItem>
				</LinkContainer>
				<LinkContainer to="/candidates">
					<NavItem eventKey={ 3 } href="/candidates">
						<i className="material-icons">&#xE7FB;</i> { job.title }
					</NavItem>
				</LinkContainer>
			</ul>  
			<ul className="nav navbar-nav pull-right">
				<NavDropdown eventKey={ 4 } id="basic-nav-dropdown">
					<MenuItem eventKey={ 4.1 }>Paramètres</MenuItem>
					<MenuItem eventKey={ 4.1 }>Déconnexion</MenuItem>
				</NavDropdown> 
			</ul> 
	  </div>
	</nav>
);

BoardHeader.propTypes = {
  job: React.PropTypes.object,
};