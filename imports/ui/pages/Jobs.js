import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import JobsList from '../containers/JobsList.js';

const Jobs = () => (
  <div className="Jobs">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Jobs</h4>
          <Link to="/jobs/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Job</Button>
          </Link>
        </div>
        <JobsList />
      </Col>
    </Row>
  </div>
);

export default Jobs;
