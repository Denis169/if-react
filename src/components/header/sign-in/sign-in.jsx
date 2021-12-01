import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import {
  authorizationActionCreator,
  inputMailActionCreator,
  inputPasswordActionCreator,
} from '../../../actionCreators';

import './sign-in.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const password = useSelector(createSelector((state) => state.authorisation.password, (data) => data));
  const mail = useSelector(createSelector((state) => state.authorisation.mail, (data) => data));

  const mailChange = (event) => {
    event.preventDefault();
    dispatch(inputMailActionCreator(event.target.value));
  };

  const passwordChange = (event) => {
    event.preventDefault();
    dispatch(inputPasswordActionCreator(event.target.value));
  };

  const checkMailPass = (event) => {
    event.preventDefault();
    localStorage.getItem('mail') === mail
    && localStorage.getItem('password') === password
    && dispatch(authorizationActionCreator(true));
  };

  return (
    <div className="signIn__block">
      <h3 className="signIn__title">Sign in</h3>
      <form className="signIn__form" onSubmit={checkMailPass}>
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
};

export default SignIn;
