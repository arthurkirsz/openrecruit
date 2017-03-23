import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeCandidate } from '../../../api/candidates/methods';
import NotFound from '../NotFound';

const handleEdit = (_id) => {
  browserHistory.push(`/candidates/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeCandidate.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Candidate deleted!', 'success');
        browserHistory.push('/candidates');
      }
    });
  }
};

const ViewCandidate = ({ candidate }) => {
  return candidate ? (
    <div className="ViewCandidate">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ candidate && `${candidate.firstname} ${candidate.lastname}` }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(candidate._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(candidate._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { candidate && candidate.body }
    </div>
  ) : <NotFound />;
};

ViewCandidate.propTypes = {
  candidate: React.PropTypes.object,
};

export default ViewCandidate;
