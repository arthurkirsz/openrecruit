import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Candidates } from '../../ui/pages/candidates';
import { Carreer } from '../../ui/pages/career';
import { Jobs } from '../../ui/pages/jobs';
import { JobDetail } from '../../ui/pages/job-detail';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';

const requireAuth = (nextState, replace) => {
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
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />        
        <Route name="jobs" path="/jobs" component={ Jobs } onEnter={ requireAuth } />        
        <Route name="job-detail" path="/jobs/:id" component={ JobDetail } onEnter={ requireAuth } />
        <Route name="candidates" path="/candidates" component={ Candidates } onEnter={ requireAuth } />
        <Route name="candidate-detail" path="/candidates/:id" component={ Candidates } onEnter={ requireAuth } />
        <Route name="career" path="/career" component={ Carreer } onEnter={ requireAuth } />
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
