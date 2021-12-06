import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import Homes from '../components/homes-guests-loves/homes/homes';
import Header from '../components/header/header/header';
import Footer from '../components/footer/footer';
import ChosenHotel from '../components/chosen-hotel/chosenHotel';
import Authorization from '../components/header/authorization/authorization';
import Sprites from '../components/Svg/Sprites';
import Available from '../components/homes-guests-loves/available/available';

import '../styles/index.scss';

const App = () => {
  const navigate = useNavigate();
  const available = useSelector(createSelector((state) => state.form.available, (dataArray) => dataArray));
  const authorization = useSelector(createSelector((state) => state.authorisation.authorization, (dataArray) => dataArray));
  const navigationChosenHotel = useSelector(createSelector((state) => state.chosenHotel.navigationChosenHotel, (dataArray) => dataArray));
  const hotelChosenID = useSelector(createSelector((state) => state.chosenHotel.requestChosenHotel, (dataArray) => dataArray));

  useEffect(() => {
    if (localStorage.getItem('mail') === null) {
      localStorage.setItem('mail', '758@gmail.com');
      localStorage.setItem('password', '1234');
    }

    if (!authorization) {
      navigate('/authorization');
    } else if (navigationChosenHotel) {
      navigate(`/hotels/${hotelChosenID}`);
    } else {
      navigate('/');
    }
  }, [authorization]);

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
              {available && <Available />}
              <Homes />
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
