import React from 'react';

import './sign-in.scss';

const SignIn = ({
  mailChange, passwordChange, mail, password, signIn,
}) => (
  <div className="signIn__block">
    <h3 className="signIn__title">Sign in</h3>
    <form className="signIn__form" onSubmit={signIn}>
      <label className="signIn__email-label" htmlFor="mail">
        Email address
        <input
          className="signIn__email"
          id="mail"
          type="email"
          value={mail}
          onChange={mailChange}
        />
      </label>
      <label className="signIn__password-label" htmlFor="password">
        Password
        <input
          className="signIn__password"
          id="password"
          type="password"
          value={password}
          onChange={passwordChange}
        />
      </label>
      <div className="signIn__button-block">
        <input className="signIn__button" type="submit" value="Sign in" />
      </div>
    </form>
  </div>

);

export default SignIn;
