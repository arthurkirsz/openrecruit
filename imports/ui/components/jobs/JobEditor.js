/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import jobEditor from '../../../modules/job-editor.js';

export default class JobEditor extends React.Component {
  componentDidMount() {
    jobEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { job } = this.props;
    return (<form
      ref={ form => (this.jobEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ job && job.title }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { job && job._id ? 'Save Changes' : 'Add Job' }
      </Button>
    </form>);
  }
}

JobEditor.propTypes = {
  job: React.PropTypes.object,
};
