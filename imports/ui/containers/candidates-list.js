import { composeWithTracker } from 'react-komposer';
import { Candidates } from '../../api/candidates/candidates.js';
import { CandidatesList } from '../components/candidates/list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('candidates');
  if (subscription.ready()) {
    const candidates = Candidates.find().fetch();
    onData(null, { candidates });
  }
};

export default composeWithTracker(composer, Loading)(Candidates);
