import React from 'react';
import JobDetailContainer from '../containers/job-detail.js';

export const JobDetail = ({ params, location }) => (
  <div id="content">
  	<JobDetailContainer {...params} />
  </div>
);