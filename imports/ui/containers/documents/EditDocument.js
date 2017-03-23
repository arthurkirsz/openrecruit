import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../../api/documents/documents.js';
import EditDocument from '../../pages/documents/EditDocument.js';
import Loading from '../../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('documents.view', params._id);

  if (subscription.ready()) {
    const doc = Documents.findOne(params._id);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditDocument);