import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Jobs from '../../../api/jobs/jobs.js';
import ViewJob from '../../pages/jobs/ViewJob.js';
import Loading from '../../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('jobs.view', params._id);

  if (subscription.ready()) {
    const job = Jobs.findOne(params._id);
    onData(null, { job });
  }
};

export default composeWithTracker(composer, Loading)(ViewJob);
