import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertCandidate } from '../../../api/candidates/methods.js';

const handleInsertCandidate = (event) => {
  const target = event.target;
  const firstname = lastname = target.value.trim();

  if (firstname !== '' && event.keyCode === 13) {
    insertCandidate.call({
      firstname, lastname
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Candidate added!', 'success');
      }
    });
  }
};

export const AddJob = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertCandidate }
      placeholder="Type a candidate firstname and press enter..."
    />
  </FormGroup>
);
