import React from 'react';
import { Link } from 'react-router';

export const Job = ({ job }) => (
  <div>
  	<Link to={`/jobs/${job._id}`}>{ job.title }</Link>
  </div>
);

Job.propTypes = {
  job: React.PropTypes.object,
};