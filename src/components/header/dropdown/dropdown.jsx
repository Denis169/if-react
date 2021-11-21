import React from 'react';

import SignOut from '../../../assets/image/signOut.svg';

import './dropdown.scss';

const Dropdown = ({ nullPassword }) => (
  <button type="button" className="dropdown" onClick={nullPassword}>
    <img className="dropdown__image-out" src={SignOut} alt="out" />
    <p className="dropdown__sign-out">Sign out</p>
  </button>
);

export default Dropdown;
