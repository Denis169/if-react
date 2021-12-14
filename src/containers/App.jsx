import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { ThemeProvider } from '@emotion/react';

import Homes from '../components/homes-guests-loves/homes';
import Header from '../components/header/header';
import Footer from '../components/footer';
import ChosenHotel from '../components/chosen-hotel';
import Authorization from '../components/header/authorization';
import Sprites from '../components/Svg/Sprites';
import Available from '../components/homes-guests-loves/available';

import { colorsTheme, colorsThemeTwo } from '../constants/style.variable';

import '../styles/index.scss';

const App = () => {
  const navigate = useNavigate();
  const available = useSelector(createSelector((state) => state.form.available, (dataArray) => dataArray));
  const authorization = useSelector(createSelector((state) => state.authorisation.authorization, (dataArray) => dataArray));
  const navigationChosenHotel = useSelector(createSelector((state) => state.chosenHotel.navigationChosenHotel, (dataArray) => dataArray));
  const hotelChosenID = useSelector(createSelector((state) => state.chosenHotel.requestChosenHotel, (dataArray) => dataArray));
  const themeColors = useSelector(createSelector((state) => state.logoNav.theme, (data) => data));

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
    <ThemeProvider theme={themeColors ? colorsTheme : colorsThemeTwo}>
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
    </ThemeProvider>
  );
};

export default App;
