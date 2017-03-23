/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import candidateEditor from '../../../modules/candidate-editor.js';

export default class CandidateEditor extends React.Component {
  componentDidMount() {
    candidateEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="firstname"]').focus(); }, 0);
  }

  render() {
    const { candidate } = this.props;
    return (<form
      ref={ form => (this.candidateEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Firstname</ControlLabel>
        <FormControl
          type="text"
          name="firstname"
          defaultValue={ candidate && candidate.firstname }
          placeholder="Chuck"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Lastname</ControlLabel>
        <FormControl
          type="text"
          name="lastname"
          defaultValue={ candidate && candidate.lastname }
          placeholder="Norris"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { candidate && candidate._id ? 'Save Changes' : 'Add Candidate' }
      </Button>
    </form>);
  }
}

CandidateEditor.propTypes = {
  candidate: React.PropTypes.object,
};
