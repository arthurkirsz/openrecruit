import { Candidates } from './candidates';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertCandidate = new ValidatedMethod({
  name: 'candidates.insert',
  validate: new SimpleSchema({
    title: { type: String }
  }).validator(),
  run(candidate) {
    candidate.ownerId = Meteor.userId();
    Candidates.insert(candidate);
  },
});

export const updateCandidate = new ValidatedMethod({
  name: 'candidates.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Candidates.update(_id, { $set: update });
  },
});

export const removeCandidate = new ValidatedMethod({
  name: 'candidates.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Candidates.remove(_id);
  },
});

rateLimit({
  methods: [
    insertCandidate,
    updateCandidate,
    removeCandidate,
  ],
  limit: 5,
  timeRange: 1000,
});
