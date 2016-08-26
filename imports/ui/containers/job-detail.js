import { composeWithTracker } from 'react-komposer';
import { Jobs } from '../../api/jobs/jobs.js';
import { Board } from '../components/board/board.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('jobs');
  if (subscription.ready()) {
    const job = Jobs.findOne(params.id);
    onData(null, { job });
  }
};

export default composeWithTracker(composer, Loading)(Board);
