import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import Filters from '../filters/filters';
import Datepicker from '../datepicker/datepicker';

import {
  addAvailableActionCreator,
  inputSearchActionCreator, requestFormActionCreator,
} from '../../../actionCreators';

import './form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const search = useSelector(createSelector((state) => state.form.search, (data) => data));
  const startDate = useSelector(createSelector((state) => state.datepicker.dateStart, (dataArray) => dataArray));
  const endDate = useSelector(createSelector((state) => state.datepicker.dateEnd, (dataArray) => dataArray));
  const currentAdults = useSelector(createSelector((state) => state.filters.currentAdults, (data) => data));
  const currentRooms = useSelector(createSelector((state) => state.filters.currentRooms, (data) => data));

  const searchChange = (event) => {
    event.preventDefault();
    dispatch(inputSearchActionCreator(event.target.value));
  };

  const addAvailable = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(Object.values(formData).join(','));
    console.log(Date.parse(startDate), Date.parse(endDate));

    search && dispatch(addAvailableActionCreator(true));

    dispatch(requestFormActionCreator(`search=${search}&dateFrom=${Date.parse(startDate)}&dateTo=${Date.parse(endDate)}&adults=${currentAdults}&children=${Object.values(formData).join(',')}&rooms=${currentRooms}`));
  };

  return (
    <form className="header__form" onSubmit={addAvailable}>
      <div className="header__input-place-block">
        <label className="header__input input__place" htmlFor="place">
          Your destination or hotel name:
          <input
            className="header__input input__place "
            id="place"
            type="text"
            placeholder="New York"
            value={search}
            onChange={searchChange}
          />
        </label>
      </div>
      <div className="header__input-date-block">
        <Datepicker id="checkIn" type="text" />
      </div>
      <Filters />
      <div className="header__input-button-block">
        <input className="header__input input-button" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
