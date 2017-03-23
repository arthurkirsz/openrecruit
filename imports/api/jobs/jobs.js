import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Jobs = new Mongo.Collection('Jobs');
export default Jobs;

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

const ColumnSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of the column',
  },
});

Jobs.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the job.',
  },
  columns: {
    type: [ColumnSchema],
    label: 'Array of columns.',
  },
});

Jobs.attachSchema(Jobs.schema);

Factory.define('job', Jobs, {
  title: () => 'Factory Title',
});
