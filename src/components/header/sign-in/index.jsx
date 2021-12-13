import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import { authorizationActionCreator, inputMailActionCreator, inputPasswordActionCreator } from '../../../actionCreators';

import { SignInSection, Button, Form, H3 } from './style.module';

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
    <SignInSection>
      <H3>Sign in</H3>
      <Form onSubmit={checkMailPass}>
        <label htmlFor="mail">
          Email address
          <input
            id="mail"
            type="email"
            value={mail}
            onChange={mailChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </label>
        <Button>
          <input type="submit" value="Sign in" />
        </Button>
      </Form>
    </SignInSection>
  );
};

export default SignIn;
