/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertCandidate } from '../api/candidates/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { candidate } = component.props;
  const confirmation = candidate && candidate._id ? 'Candidate updated!' : 'Candidate added!';
  const upsert = {
    firstname: document.querySelector('[name="firstname"]').value.trim(),
    lastname: document.querySelector('[name="lastname"]').value.trim(),
  };

  if (candidate && candidate._id) upsert._id = candidate._id;

  upsertCandidate.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.candidateEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/candidates/${response.insertedId || candidate._id}`);
    }
  });
};

const validate = () => {
  $(component.candidateEditorForm).validate({
    rules: {
      firstname: {
        required: true,
      },
      lastname: {
        required: true,
      },
    },
    messages: {
      firstname: {
        required: 'Need a firstname in here, Mam.',
      },
      lastname: {
        required: 'Need a lastname in here, Sir.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function candidateEditor(options) {
  component = options.component;
  validate();
}
