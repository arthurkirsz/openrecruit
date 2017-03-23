/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';

import Documents from '../../ui/pages/documents/Documents.js';
import NewDocument from '../../ui/pages/documents/NewDocument.js';
import EditDocument from '../../ui/containers/documents/EditDocument.js';
import ViewDocument from '../../ui/containers/documents/ViewDocument.js';

import Jobs from '../../ui/pages/jobs/Jobs.js';
import NewJob from '../../ui/pages/jobs/NewJob.js';
import EditJob from '../../ui/containers/jobs/EditJob.js';
import ViewJob from '../../ui/containers/jobs/ViewJob.js';

import Candidates from '../../ui/pages/candidates/Candidates.js';
import NewCandidate from '../../ui/pages/candidates/NewCandidate.js';
import EditCandidate from '../../ui/containers/candidates/EditCandidate.js';
import ViewCandidate from '../../ui/containers/candidates/ViewCandidate.js';

import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />
        <Route name="jobs" path="/jobs" component={ Jobs } onEnter={ authenticate } />
        <Route name="newJob" path="/jobs/new" component={ NewJob } onEnter={ authenticate } />
        <Route name="editJob" path="/jobs/:_id/edit" component={ EditJob } onEnter={ authenticate } />
        <Route name="viewJob" path="/jobs/:_id" component={ ViewJob } onEnter={ authenticate } />
        <Route name="candidates" path="/candidates" component={ Candidates } onEnter={ authenticate } />
        <Route name="newCandidate" path="/candidates/new" component={ NewCandidate } onEnter={ authenticate } />
        <Route name="editCandidate" path="/candidates/:_id/edit" component={ EditCandidate } onEnter={ authenticate } />
        <Route name="viewCandidate" path="/candidates/:_id" component={ ViewCandidate } onEnter={ authenticate } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
