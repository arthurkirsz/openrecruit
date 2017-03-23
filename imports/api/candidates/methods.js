import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Candidates from './candidates';
import rateLimit from '../../modules/rate-limit.js';

export const upsertCandidate = new ValidatedMethod({
  name: 'candidates.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    firstname: { type: String },
    lastname: { type: String },
  }).validator(),
  run(candidate) {
    return Candidates.upsert({ _id: candidate._id }, { $set: candidate });
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
    upsertCandidate,
    removeCandidate,
  ],
  limit: 5,
  timeRange: 1000,
});
