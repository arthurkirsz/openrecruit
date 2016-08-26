import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Candidates = new Mongo.Collection('Candidates');

Candidates.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Candidates.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Candidates.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the candidate.',    
  },
  contract: {
    type: String,
    label: 'The contract type of the candidate.',
    optional: true // TEMPORARY
  },
  location: {
    type: String,
    label: 'The location of the candidate.',
    optional: true // TEMPORARY
  },
  ownerId: {
    type: String,
    label: 'The owner id of the candidate.',
    optional: true // TEMPORARY
  }
});

Candidates.attachSchema(Candidates.schema);

Factory.define('candidate', Candidates, {
  title: () => faker.hacker.phrase(),
});
