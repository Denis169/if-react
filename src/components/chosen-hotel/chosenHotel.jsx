import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import HomesCol from '../homes-guests-loves/homes-col/homes-col';

import { navigationChosenHotelActionCreator, requestChosenHotelActionCreator } from '../../actionCreators';

import './chosenHotel.scss';

const ChosenHotel = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const dataChosenHotel = useSelector(createSelector((state) => state.chosenHotel.dataChosenHotel, (dataArray) => dataArray));

  useEffect(() => {
    dispatch(navigationChosenHotelActionCreator(true));
    dispatch(requestChosenHotelActionCreator(params.hotelID));

    return () => {
      dispatch(navigationChosenHotelActionCreator(false));
    };
  }, []);

  return (
    <div className="chosen-hotel">
      <h2 className="title__chosen-hotel">Your choice</h2>
      <div className="body__chosen-hotel">
        <HomesCol
          name={dataChosenHotel.name}
          imageUrl={dataChosenHotel.imageUrl}
          city={dataChosenHotel.city}
          country={dataChosenHotel.country}
          keu={dataChosenHotel.id}
        />
      </div>
    </div>
  );
};

export default ChosenHotel;
