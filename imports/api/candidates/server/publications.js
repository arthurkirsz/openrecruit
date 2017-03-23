import { Meteor } from 'meteor/meteor';
import { Candidates } from '../candidates';

Meteor.publish('candidates', () => Candidates.find());
