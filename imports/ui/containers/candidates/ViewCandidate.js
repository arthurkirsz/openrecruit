import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Candidates from '../../../api/candidates/candidates.js';
import ViewCandidate from '../../pages/candidates/ViewCandidate.js';
import Loading from '../../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('candidates.view', params._id);

  if (subscription.ready()) {
    const candidate = Candidates.findOne(params._id);
    onData(null, { candidate });
  }
};

export default composeWithTracker(composer, Loading)(ViewCandidate);
