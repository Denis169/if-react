import React from 'react';

import SignIn from '../sign-in/sign-in';
import LogoNav from '../logo-nav/logo-nav';

import './authorization.scss';

const Authorization = () => (
  <header>
    <div className="container">
      <LogoNav />
      <SignIn />
    </div>
  </header>
);

export default Authorization;
