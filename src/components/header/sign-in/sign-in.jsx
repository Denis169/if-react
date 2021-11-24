import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  authorizationActionCreator,
  dataHomesActionCreator,
  inputMailActionCreator,
  inputPasswordActionCreator,
} from '../../../actionCreators';

import { urlHomes } from '../../../constants/urls';

import './sign-in.scss';

const SignIn = ({
  setMail,
  setPassword,
  mail,
  password,
  authorization,
  setData,
}) => {
  const mailChange = (event) => {
    event.preventDefault();
    setMail(event.target.value);
  };

  const passwordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const checkMailPass = (event) => {
    event.preventDefault();
    localStorage.getItem('mail') === mail
    && localStorage.getItem('password') === password
    && authorization(true);

    if (sessionStorage.getItem('data') === null) {
      axios.get(urlHomes)
        .then((response) => {
          sessionStorage.setItem('data', JSON.stringify([...response.data]));
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
    setData(JSON.parse(sessionStorage.getItem('data')));
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

const mapStateToProps = (state) => ({
  mail: state.authorisation.mail,
  password: state.authorisation.password,
});

const mapDispatchToProps = (dispatch) => ({
  setMail: (value) => dispatch(inputMailActionCreator(value)),
  setPassword: (value) => dispatch(inputPasswordActionCreator(value)),
  authorization: (value) => dispatch(authorizationActionCreator(value)),
  setData: (value) => dispatch(dataHomesActionCreator(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
