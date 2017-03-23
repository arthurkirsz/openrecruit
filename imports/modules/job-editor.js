/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertJob } from '../api/jobs/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { job } = component.props;
  const confirmation = job && job._id ? 'Job updated!' : 'Job added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
  };

  if (job && job._id) upsert._id = job._id;

  upsertJob.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.jobEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/jobs/${response.insertedId || job._id}`);
    }
  });
};

const validate = () => {
  $(component.jobEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function jobEditor(options) {
  component = options.component;
  validate();
}
