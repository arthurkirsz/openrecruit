import React from 'react';
import { Modal, ButtonToolbar, ButtonGroup, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeJob } from '../../../api/jobs/methods';
import NotFound from '../NotFound';

class ViewJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  handleEdit(_id) {
    browserHistory.push(`/jobs/${_id}/edit`);
  }
  handleRemove(_id) {
    if (confirm('Are you sure? This is permanent!')) {
      removeJob.call({ _id }, (error) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Job deleted!', 'success');
          browserHistory.push('/jobs');
        }
      });
    }
  }
  render() {
    const { job } = this.props;
    return job ? (
      <div className="ViewJob modal-container">
        <div className="page-header clearfix">
          <h4 className="pull-left">{ job && job.title }</h4>
          <ButtonToolbar className="pull-right">
            <ButtonGroup bsSize="small">
              <Button>+ Add candidates</Button>
              <Button onClick={ () => this.handleEdit(job._id) }>Edit</Button>
              <Button onClick={ () => this.handleRemove(job._id) } className="text-danger">
                Delete
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div className="AddColumnButton" onClick={ () => this.open() }>
          + Add Column
        </div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add a column</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Column name</ControlLabel>
              <FormControl
                type="text"
                name="column"
                placeholder="Sourced, Applied, Interview, you name it"
              />
            </FormGroup>
            <Button type="submit" bsStyle="success">
              Create column
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    ) : <NotFound />;
  }
}

ViewJob.propTypes = {
  job: React.PropTypes.object,
};

export default ViewJob;
