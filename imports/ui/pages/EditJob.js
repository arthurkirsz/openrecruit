import React from 'react';
import JobEditor from '../components/JobEditor';
import NotFound from './NotFound';

const EditJob = ({ job }) => {
  return job ? (
    <div className="EditJob">
      <h4 className="page-header">Editing "{ job.title }"</h4>
      <JobEditor job={ job }/>
    </div>
  ) : <NotFound />;
};

EditJob.propTypes = {
  job: React.PropTypes.object,
};

export default EditJob;
