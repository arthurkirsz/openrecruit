import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Candidates from '../../../api/candidates/candidates.js';
import CandidatesList from '../../components/candidates/CandidatesList.js';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('candidates.list');
  if (subscription.ready()) {
    const candidates = Candidates.find().fetch();
    onData(null, { candidates });
  }
};

export default composeWithTracker(composer, Loading)(CandidatesList);
