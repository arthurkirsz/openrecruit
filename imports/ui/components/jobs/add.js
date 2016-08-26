import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertJob } from '../../../api/jobs/methods.js';

const handleInsertJob = (event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    insertJob.call({
      title,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Job added!', 'success');
      }
    });
  }
};

export const AddJob = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertJob }
      placeholder="Type a job title and press enter..."
    />
  </FormGroup>
);
