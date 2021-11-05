import React from 'react';
import Form from '../form/form';
import Market from '../market/market';

import './header.scss';
import LogoNav from '../logo-nav/logo-nav';

const Header = ({ search, searchChange, addAvailable }) => (

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
        <Form
          search={search}
          searchChange={searchChange}
          addAvailable={addAvailable}
        />
      </div>
      <Market />
    </div>
  </header>

);

export default Header;
