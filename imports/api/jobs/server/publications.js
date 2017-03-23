import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Jobs from '../jobs';

Meteor.publish('jobs.list', () => Jobs.find());

Meteor.publish('jobs.view', (_id) => {
  check(_id, String);
  return Jobs.find(_id);
});
