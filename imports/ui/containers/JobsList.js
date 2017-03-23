import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Jobs from '../../api/jobs/jobs.js';
import JobsList from '../components/JobsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('jobs.list');
  if (subscription.ready()) {
    const jobs = Jobs.find().fetch();
    onData(null, { jobs });
  }
};

export default composeWithTracker(composer, Loading)(JobsList);
