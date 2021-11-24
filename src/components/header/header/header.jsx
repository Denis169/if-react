import React from 'react';

import Form from '../form/form';
import Market from '../market/market';
import LogoNav from '../logo-nav/logo-nav';

import './header.scss';

const Header = () => (

  <header>
    <div className="container">
      <LogoNav />
      <div className="header__top-section">
        <h1>
          Discover stays
          <br />
          {' '}
          to live, work or just relax
        </h1>
        <Form />
      </div>
      <Market />
    </div>
  </header>

);

export default Header;
