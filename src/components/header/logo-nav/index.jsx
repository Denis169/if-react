import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import Dropdown from '../dropdown/dropdown';

import { colorAccountActionCreator, themeActionCreator } from '../../../actionCreators';

import { colorsTheme } from '../../../constants/style.variable';
import logo from '../../../assets/image/TripHouse.svg';

import { HeaderMenu, AccountCircle, Night, LogoAndNav, P } from './style.module';

const LogoNav = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const colorAccount = useSelector(createSelector((state) => state.logoNav.colorAccount, (data) => data));
  const theme = useSelector(createSelector((state) => state.logoNav.theme, (data) => data));

  useEffect(() => {
    params.authorization === 'authorization' && dispatch(colorAccountActionCreator(false));
  }, [colorAccount, params.authorization]);

  const addDropdown = (event) => {
    event.preventDefault();
    colorAccount ? dispatch(colorAccountActionCreator(false)) : dispatch(colorAccountActionCreator(true));
  };

  const changeTheme = (event) => {
    event.preventDefault();
    console.log(theme);
    theme ? dispatch(themeActionCreator(false)) : dispatch(themeActionCreator(true));
  };

  return (
    <LogoAndNav>
      <Link to="/">
        <img src={logo} alt="TripHouse" />
      </Link>
      <HeaderMenu>
        <P>Stays</P>
        <P>Attractions</P>
        <Night onClick={changeTheme}>
          <use href="#night-button" />
        </Night>
        <AccountCircle
          style={colorAccount ? { fill: `${colorsTheme.secondary}` } : { fill: `${colorsTheme.white}` }}
          onClick={addDropdown}
        >
          <use href="#account-circle" />
        </AccountCircle>
        {colorAccount && params.authorization !== 'authorization' && <Dropdown />}
      </HeaderMenu>
    </LogoAndNav>
  );
};

export default LogoNav;
