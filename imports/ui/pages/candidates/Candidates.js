import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import CandidatesList from '../../containers/candidates/CandidatesList.js';

const Candidates = () => (
  <div className="Candidates">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Candidates</h4>
          <Link to="/candidates/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Candidate</Button>
          </Link>
        </div>
        <CandidatesList />
      </Col>
    </Row>
  </div>
);

export default Candidates;
