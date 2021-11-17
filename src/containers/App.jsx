import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { urlHomes, urlAvailable } from '../constants/urls';

import Homes from '../components/homes-guests-loves/homes/homes';
import Header from '../components/header/header/header';
import Footer from '../components/footer/footer';
import ChosenHotel from '../components/chosen-hotel/chosenHotel';

import '../styles/index.scss';

const App = () => {
  const [search, setSearch] = useState('');
  const [available, setAvailable] = useState(false);
  const [availableData, setAvailableData] = useState([]);
  const [data, setData] = useState([]);
  const [classArrow, setClassArrow] = useState('');
  const [countAvailable, setCountAvailable] = useState(0);
  const [countHomes, setCountHomes] = useState(0);

  useEffect(() => {
    axios.get(urlHomes)
      .then((response) => {
        setData([...response.data]);
        console.log(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [data]);

  const plusCountAvailable = () => setCountAvailable(countAvailable + 1);

  const minusCountAvailable = () => setCountAvailable(countAvailable - 1);

  const plusCountHomes = () => setCountHomes(countHomes + 1);

  const minusCountHomes = () => setCountHomes(countHomes - 1);

  const searchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    event.stopPropagation();
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
    event.stopPropagation();
  };

  return (
    <div>
      <Header search={search} searchChange={searchChange} addAvailable={addAvailable} />
      <Routes>
        <Route
          path="/"
          element={(
            <>
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
          element={<ChosenHotel />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
