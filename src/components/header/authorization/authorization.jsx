import React from 'react';

import SignIn from '../sign-in/sign-in';
import LogoNav from '../logo-nav/logo-nav';

import './authorization.scss';

const Authorization = ({
  mailChange, passwordChange, mail, password, signIn,
}) => (
  <header>
    <div className="container">
      <LogoNav />
      <SignIn
        mailChange={mailChange}
        passwordChange={passwordChange}
        mail={mail}
        password={password}
        signIn={signIn}
      />
    </div>
  </header>
);

export default Authorization;
