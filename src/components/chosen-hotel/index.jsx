import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import HomesCol from '../homes-guests-loves/homes-col/homes-col';

import { navigationChosenHotelActionCreator, requestChosenHotelActionCreator } from '../../actionCreators';

import { ChosenHotelElem, H2, BodyChosenHotel } from './styles.module';

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
    <ChosenHotelElem>
      <H2>Your choice</H2>
      <BodyChosenHotel>
        <HomesCol
          name={dataChosenHotel.name}
          imageUrl={dataChosenHotel.imageUrl}
          city={dataChosenHotel.city}
          country={dataChosenHotel.country}
          keu={dataChosenHotel.id}
        />
      </BodyChosenHotel>
    </ChosenHotelElem>
  );
};

export default ChosenHotel;
