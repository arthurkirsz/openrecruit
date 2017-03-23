import React from 'react';
import CandidateEditor from '../../components/candidates/CandidateEditor';
import NotFound from '../NotFound';

const EditCandidate = ({ candidate }) => {
  return candidate ? (
    <div className="EditCandidate">
      <h4 className="page-header">Editing "{ `${candidate.firstname} ${candidate.lastname}` }"</h4>
      <CandidateEditor candidate={ candidate }/>
    </div>
  ) : <NotFound />;
};

EditCandidate.propTypes = {
  candidate: React.PropTypes.object,
};

export default EditCandidate;
