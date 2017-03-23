import React from 'react';
import Sortable from 'react-sortablejs';
import { Modal, ButtonToolbar, ButtonGroup, Button, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { addColumn, removeJob } from '../../../api/jobs/methods';
import CandidatesList from '../../containers/candidates/CandidatesList.js';
import NotFound from '../NotFound';

class ViewJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showPanel: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAddColumn = this.handleAddColumn.bind(this);
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
  handleAddColumn() {
    const { _id } = this.props.job;
    const name = document.querySelector('[name="columnName"]').value.trim();
    addColumn.call({ _id, column: { name } }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        this.close();
      }
    });
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
              <Button onClick={ () => this.setState({ showPanel: true }) }>+ Add candidates</Button>
              <Button onClick={ () => this.handleEdit(job._id) }>Edit</Button>
              <Button onClick={ () => this.handleRemove(job._id) } className="text-danger">
                Delete
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div>
          <Sortable options={{ animation: 150 }} className="ColumnsContainer" onChange={ () => alert('changed') } tag="div">
            { job.columns.map(({ name }, i) => (
              <div className="Column" data-id={i}>
                <div className="ColumnHeader">{name}</div>
              </div>
            ))}
            <div className="AddColumnButton" draggable={false} onClick={ () => this.open() }>
              + Add Column
            </div>
          </Sortable>
        </div>
        <div className={this.state.showPanel ? 'JobPane' : 'hidden'}>
          <CandidatesList />
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
                name="columnName"
                placeholder="Sourced, Applied, Interview, you name it"
              />
            </FormGroup>
            <Button type="submit" bsStyle="success" onClick={ () => this.handleAddColumn() }>
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
