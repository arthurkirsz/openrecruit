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
  picture: {
    type: String, 
    optional: true
  },
  firstname: {
    type: String,
    label: "The candidate's firstname"
  },
  lastname: {
    type: String,
    label: "The candidate's lastname"
  }
});

Candidates.attachSchema(Candidates.schema);

Factory.define('candidate', Candidates, {
  title: () => faker.hacker.phrase(),
});
