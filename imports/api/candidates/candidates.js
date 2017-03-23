import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Candidates = new Mongo.Collection('Candidates');
export default Candidates;

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
  firstname: {
    type: String,
    label: 'The candidate\'s firstname',
  },
  lastname: {
    type: String,
    label: 'The candidate\'s lastname',
  },
});

Candidates.attachSchema(Candidates.schema);
