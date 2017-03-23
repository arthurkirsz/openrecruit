import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/jobs/${_id}`);
};

const JobsList = ({ jobs }) => (
  jobs.length > 0 ? <ListGroup className="JobsList">
    {jobs.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
        { title }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No jobs yet.</Alert>
);

JobsList.propTypes = {
  jobs: React.PropTypes.array,
};

export default JobsList;
