import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Jobs = new Mongo.Collection('Jobs');

Jobs.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Jobs.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Jobs.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the job.',    
  },
  contract: {
    type: String,
    label: 'The contract type of the job.',
    optional: true // TEMPORARY
  },
  location: {
    type: String,
    label: 'The location of the job.',
    optional: true // TEMPORARY
  },
  ownerId: {
    type: String,
    label: 'The owner id of the job.',
    optional: true // TEMPORARY
  }
});

Jobs.attachSchema(Jobs.schema);

Factory.define('job', Jobs, {
  title: () => faker.hacker.phrase(),
});
