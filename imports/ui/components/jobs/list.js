import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Job } from './item.js';

export const JobsList = ({ jobs }) => (
  jobs.length > 0 ? <ListGroup className="jobs-list">
    {jobs.map((job) => (
      <Job key={ job._id } job={ job } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No jobs yet.</Alert>
);

JobsList.propTypes = {
  jobs: React.PropTypes.array,
};
