import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import HomesCol from '../homes-guests-loves/homes-col/homes-col';

import { urlChose } from '../../constants/urls';

import './chosenHotel.scss';

const ChosenHotel = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(urlChose + params.hotelID)
      .then((response) => {
        setData({ ...response.data });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <div className="chosen-hotel">
      <h2 className="title__chosen-hotel">Your choice</h2>
      <div className="body__chosen-hotel">
        <HomesCol
          name={data.name}
          imageUrl={data.imageUrl}
          city={data.city}
          country={data.country}
          keu={data.id}
        />
      </div>
    </div>
  );
};

export default ChosenHotel;
