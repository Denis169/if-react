import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { urlHomes, urlAvailable } from '../constants/urls';

import Homes from '../components/homes-guests-loves/homes/homes';
import Header from '../components/header/header/header';
import Footer from '../components/footer/footer';
import ChosenHotel from '../components/chosen-hotel/chosenHotel';
import Authorization from '../components/header/authorization/authorization';
import Sprites from '../components/Svg/Sprites';

import '../styles/index.scss';

const App = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [available, setAvailable] = useState(false);
  const [availableData, setAvailableData] = useState([]);
  const [data, setData] = useState([]);
  const [classArrow, setClassArrow] = useState('');
  const [countAvailable, setCountAvailable] = useState(0);
  const [countHomes, setCountHomes] = useState(0);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [authorization, setAuthorization] = useState(false);

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
    setData(JSON.parse(sessionStorage.getItem('data')));

    if (!authorization) {
      navigate('/authorization');
    } else {
      navigate('/');
    }
  }, [authorization]);

  const plusCountAvailable = () => setCountAvailable(countAvailable + 1);

  const minusCountAvailable = () => setCountAvailable(countAvailable - 1);

  const plusCountHomes = () => setCountHomes(countHomes + 1);

  const minusCountHomes = () => setCountHomes(countHomes - 1);

  const nullPassword = (event) => {
    event.preventDefault();
    setAuthorization(false);
  };

  const signIn = (event) => {
    event.preventDefault();
    (localStorage.getItem('mail') === mail && localStorage.getItem('password') === password) && setAuthorization(true);
  };

  const mailChange = (event) => {
    event.preventDefault();
    setMail(event.target.value);
  };

  const passwordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const addAvailable = (event) => {
    event.preventDefault();

    search && setAvailable(true);

    axios.get(urlAvailable + search)
      .then((response) => {
        setAvailableData([...response.data]);
        setCountAvailable(0);

        response.data.length < 5 && setClassArrow('homes__display-none');
        response.data.length > 4 && setClassArrow('');
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div>
      <Sprites />
      <Routes>
        <Route
          path="/:authorization"
          element={(
            <Authorization
              mailChange={mailChange}
              passwordChange={passwordChange}
              mail={mail}
              password={password}
              signIn={signIn}
            />
          )}
        />
        <Route
          path="/"
          element={(
            <>
              <Header
                search={search}
                searchChange={searchChange}
                addAvailable={addAvailable}
                nullPassword={nullPassword}
              />
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
              <Header
                search={search}
                searchChange={searchChange}
                addAvailable={addAvailable}
                nullPassword={nullPassword}
              />
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
