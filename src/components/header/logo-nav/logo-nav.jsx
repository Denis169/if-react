import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import Dropdown from '../dropdown/dropdown';

import { colorAccountActionCreator } from '../../../actionCreators';

import logo from '../../../assets/image/TripHouse.svg';
import night from '../../../assets/image/Night.svg';

import './logo-nav.scss';

const LogoNav = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const colorAccount = useSelector(createSelector((state) => state.logoNav.colorAccount, (data) => data));

  useEffect(() => {
    params.authorization === 'authorization' && dispatch(colorAccountActionCreator(false));
  }, [colorAccount, params.authorization]);

  const addDropdown = (event) => {
    event.preventDefault();
    colorAccount ? dispatch(colorAccountActionCreator(false)) : dispatch(colorAccountActionCreator(true));
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
        {colorAccount && params.authorization !== 'authorization' && <Dropdown />}
      </nav>
    </div>
  );
};

export default LogoNav;
