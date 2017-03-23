import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Jobs from './jobs';
import rateLimit from '../../modules/rate-limit.js';

export const upsertJob = new ValidatedMethod({
  name: 'jobs.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
  }).validator(),
  run(job) {
    return Jobs.upsert({ _id: job._id }, { $set: job });
  },
});

export const removeJob = new ValidatedMethod({
  name: 'jobs.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Jobs.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertJob,
    removeJob,
  ],
  limit: 5,
  timeRange: 1000,
});
