import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/candidates/${_id}`);
};

const CandidatesList = ({ candidates }) => (
  candidates.length > 0 ? <ListGroup className="CandidatesList">
    {candidates.map(({ _id, firstname, lastname }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
        {`${firstname} ${lastname}`}
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No candidates yet.</Alert>
);

CandidatesList.propTypes = {
  candidates: React.PropTypes.array,
};

export default CandidatesList;
