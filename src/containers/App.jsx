import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Homes from '../components/homes-guests-loves/homes/homes';
import Header from '../components/header/header/header';
import Footer from '../components/footer/footer';
import ChosenHotel from '../components/chosen-hotel/chosenHotel';
import Authorization from '../components/header/authorization/authorization';
import Sprites from '../components/Svg/Sprites';

import {
  countHomesActionCreator,
  decrementCountAvailableActionCreator,
  incrementCountAvailableActionCreator,
} from '../actionCreators';

import '../styles/index.scss';

const App = ({
  authorization,
  availableData,
  available,
  countAvailable,
  plusCountAvailable,
  minusCountAvailable,
  classArrow,
  data,
  countHomes,
  setCountHomes,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('mail') === null) {
      localStorage.setItem('mail', '758@gmail.com');
      localStorage.setItem('password', '1234');
    }

    if (!authorization) {
      navigate('/authorization');
    } else {
      navigate('/');
    }
  }, [authorization]);

  const plusCountHomes = () => setCountHomes(countHomes + 1);

  const minusCountHomes = () => setCountHomes(countHomes - 1);

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

const mapStateToProps = (state) => ({
  authorization: state.authorisation.authorization,
  availableData: state.form.availableData,
  available: state.form.available,
  countAvailable: state.form.countAvailable,
  classArrow: state.form.classArrow,
  data: state.homes.data,
  countHomes: state.homes.countHomes,
});

const mapDispatchToProps = (dispatch) => ({
  plusCountAvailable: (value) => dispatch(incrementCountAvailableActionCreator(value)),
  minusCountAvailable: (value) => dispatch(decrementCountAvailableActionCreator(value)),
  setCountHomes: (value) => dispatch(countHomesActionCreator(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
