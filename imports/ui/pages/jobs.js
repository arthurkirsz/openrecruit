import React from 'react';
import { Row, Col } from 'react-bootstrap';
import JobsList from '../containers/jobs-list.js';
import { AddJob } from '../components/jobs/add.js';

export const Jobs = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Jobs</h4>
      <AddJob />
      <JobsList />
    </Col>
  </Row>
);
