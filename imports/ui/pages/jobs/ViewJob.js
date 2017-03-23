import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeJob } from '../../../api/jobs/methods';
import NotFound from '../NotFound';

const handleEdit = (_id) => {
  browserHistory.push(`/jobs/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeJob.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Job deleted!', 'success');
        browserHistory.push('/jobs');
      }
    });
  }
};

const ViewJob = ({ job }) => {
  return job ? (
    <div className="ViewJob">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ job && job.title }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(job._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(job._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { job && job.body }
    </div>
  ) : <NotFound />;
};

ViewJob.propTypes = {
  job: React.PropTypes.object,
};

export default ViewJob;
