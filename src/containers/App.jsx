import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import axios from 'axios';
import { urlHomes } from '../constants/urls';

import Homes from '../components/homes-guests-loves/homes/homes';
import Header from '../components/header/header/header';
import Footer from '../components/footer/footer';
import ChosenHotel from '../components/chosen-hotel/chosenHotel';
import Authorization from '../components/header/authorization/authorization';
import Sprites from '../components/Svg/Sprites';

import {
  countHomesActionCreator,
  dataHomesActionCreator,
  setCountAvailableActionCreator,
} from '../actionCreators';

import '../styles/index.scss';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(createSelector((state) => state.homes.data, (dataArray) => dataArray));
  const countHomes = useSelector(createSelector((state) => state.homes.countHomes, (dataArray) => dataArray));
  const availableData = useSelector(createSelector((state) => state.form.availableData, (dataArray) => dataArray));
  const available = useSelector(createSelector((state) => state.form.available, (dataArray) => dataArray));
  const countAvailable = useSelector(createSelector((state) => state.form.countAvailable, (dataArray) => dataArray));
  const classArrow = useSelector(createSelector((state) => state.form.classArrow, (dataArray) => dataArray));
  const authorization = useSelector(createSelector((state) => state.authorisation.authorization, (dataArray) => dataArray));

  useEffect(() => {
    if (localStorage.getItem('mail') === null) {
      localStorage.setItem('mail', '758@gmail.com');
      localStorage.setItem('password', '1234');
    }

    if (sessionStorage.getItem('data') === null) {
      axios.get(urlHomes)
        .then((response) => {
          sessionStorage.setItem('data', JSON.stringify([...response.data]));
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
    dispatch(dataHomesActionCreator(JSON.parse(sessionStorage.getItem('data'))));

    if (!authorization) {
      navigate('/authorization');
    } else {
      navigate('/');
    }
  }, [authorization]);

  const plusCountAvailable = () => dispatch(setCountAvailableActionCreator(countAvailable + 1));

  const minusCountAvailable = () => dispatch(setCountAvailableActionCreator(countAvailable - 1));

  const plusCountHomes = () => dispatch(countHomesActionCreator(countHomes + 1));

  const minusCountHomes = () => dispatch(countHomesActionCreator(countHomes - 1));

  return (
    <div>
      <Sprites />
      <Routes>
        <Route path="/:authorization" element={(<Authorization />)} />
        <Route
          path="/"
          element={(
            <>
              <Header />
              {available && (
              <Homes
                data={availableData}
                classArrow={classArrow}
                count={countAvailable}
                plus={plusCountAvailable}
                minus={minusCountAvailable}
                nameBlock="Available hotels"
              />
              )}
              <Homes
                data={data}
                classArrow=""
                count={countHomes}
                plus={plusCountHomes}
                minus={minusCountHomes}
                nameBlock="Homes guests loves"
              />
            </>
        )}
        />
        <Route
          path="/hotels/:hotelID"
          element={(
            <>
              <Header />
              <ChosenHotel />
            </>
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
