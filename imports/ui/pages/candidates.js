import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CandidatesList from '../containers/candidates-list.js';
import { AddCandidate } from '../components/candidates/add.js';

export const Candidates = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Candidates</h4>
      <AddCandidate />
      <CandidatesList />
    </Col>
  </Row>
);
