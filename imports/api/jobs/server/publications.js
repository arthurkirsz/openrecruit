import { Meteor } from 'meteor/meteor';
import { Jobs } from '../jobs';

Meteor.publish('jobs', () => Jobs.find());
