import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Dropdown from '../dropdown/dropdown';

import logo from '../../../assets/image/TripHouse.svg';
import night from '../../../assets/image/Night.svg';

import './logo-nav.scss';

const LogoNav = ({ nullPassword }) => {
  const params = useParams();
  const [colorAccount, setColorAccount] = useState(false);

  useEffect(() => {
    params.authorization === 'authorization' && setColorAccount(true);
  }, [colorAccount, params.authorization]);

  const addDropdown = (event) => {
    event.preventDefault();
    colorAccount ? setColorAccount(false) : setColorAccount(true);
  };

  return (
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
        <svg
          className={colorAccount ? 'header__svg-account yellow' : 'header__svg-account white'}
          onClick={addDropdown}
        >
          <use href="#account-circle" />
        </svg>
        {colorAccount && params.authorization !== 'authorization' && <Dropdown nullPassword={nullPassword} />}
      </nav>
    </div>
  );
};

export default LogoNav;
