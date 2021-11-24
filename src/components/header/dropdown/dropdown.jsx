import React from 'react';
import { connect } from 'react-redux';

import SignOut from '../../../assets/image/signOut.svg';

import { authorizationActionCreator } from '../../../actionCreators';

import './dropdown.scss';

const Dropdown = ({ authorization }) => {
  const nullPassword = (event) => {
    event.preventDefault();
    authorization(false);
  };

  return (
    <button type="button" className="dropdown" onClick={nullPassword}>
      <img className="dropdown__image-out" src={SignOut} alt="out" />
      <p className="dropdown__sign-out">Sign out</p>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authorization: (value) => dispatch(authorizationActionCreator(value)),
});

export default connect(null, mapDispatchToProps)(Dropdown);
