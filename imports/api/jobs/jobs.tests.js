/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { Jobs } from './jobs.js';

describe('Jobs collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Jobs, 'object');
  });
});
