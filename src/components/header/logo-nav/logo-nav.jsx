import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/image/TripHouse.svg';
import night from '../../../assets/image/Night.svg';
import account from '../../../assets/image/AccountCircle.svg';

import './logo-nav.scss';

const LogoNav = () => (
  <div className="header__logo-nav">
    <div>
      <nav>
        <Link to="/">
          <img className="header__svg-logo" src={logo} alt="TripHouse" />
        </Link>
      </nav>
    </div>
    <nav className="header__nav">
      <a href="https://intellectfox.by/" className="header__nav-stays">Stays</a>
      <a href="https://intellectfox.by/" className="header__nav-attractions">Attractions</a>
      <a href="https://intellectfox.by/" className="header__nav-night">
        <img className="header__svg-night" src={night} alt="night" />
      </a>
      <a href="https://intellectfox.by/" className="header__nav-account">
        <img className="header__svg-account" src={account} alt="Account" />
      </a>
    </nav>
  </div>
);

export default LogoNav;
