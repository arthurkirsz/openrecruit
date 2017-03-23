import { Meteor } from 'meteor/meteor';
import Candidates from '../candidates';

Meteor.publish('candidates.list', () => Candidates.find());

Meteor.publish('candidates.view', (_id) => {
  check(_id, String);
  return Candidates.find(_id);
});
