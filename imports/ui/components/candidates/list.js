import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Candidate } from './item.js';

export const CandidatesList = ({ candidates }) => (
  candidates.length > 0 ? <ListGroup className="candidates-list">
    {candidates.map((candidate) => (
      <Candidate key={ candidate._id } candidate={ candidate } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No candidates yet.</Alert>
);

CandidatesList.propTypes = {
  candidates: React.PropTypes.array,
};
