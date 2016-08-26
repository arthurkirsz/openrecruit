import { Jobs } from './jobs';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertJob = new ValidatedMethod({
  name: 'jobs.insert',
  validate: new SimpleSchema({
    title: { type: String }
  }).validator(),
  run(job) {
    job.ownerId = Meteor.userId();
    Jobs.insert(job);
  },
});

export const updateJob = new ValidatedMethod({
  name: 'jobs.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Jobs.update(_id, { $set: update });
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
    insertJob,
    updateJob,
    removeJob,
  ],
  limit: 5,
  timeRange: 1000,
});
