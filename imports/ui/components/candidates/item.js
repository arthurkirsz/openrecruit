import React from 'react';
import { Link } from 'react-router';

export const Candidate = ({ candidate }) => (
  <div>
  	<Link to={`/candidates/${candidate._id}`}>
  		{ candidate.firstname } { candidate.lastname }
  	</Link>
  </div>
);

Candidate.propTypes = {
  candidate: React.PropTypes.object,
};