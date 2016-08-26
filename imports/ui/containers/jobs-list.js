import { composeWithTracker } from 'react-komposer';
import { Jobs } from '../../api/jobs/jobs.js';
import { JobsList } from '../components/jobs/list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('jobs');
  if (subscription.ready()) {
    const jobs = Jobs.find().fetch();
    onData(null, { jobs });
  }
};

export default composeWithTracker(composer, Loading)(JobsList);
