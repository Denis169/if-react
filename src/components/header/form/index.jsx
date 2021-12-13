import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import Filters from '../filters';
import Datepicker from '../datepicker';

import {
  addAvailableActionCreator,
  inputSearchActionCreator,
  requestFormActionCreator,
} from '../../../actionCreators';

import { HeaderForm, EnterDate, EnterText, Button } from './style.module';

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

    search && dispatch(addAvailableActionCreator(true));

    dispatch(requestFormActionCreator(`search=${search}&dateFrom=${Date.parse(startDate)}&dateTo=${Date.parse(endDate)}&adults=${currentAdults}&children=${Object.values(formData).join(',')}&rooms=${currentRooms}`));
  };

  return (
    <HeaderForm onSubmit={addAvailable}>
      <EnterText>
        <label htmlFor="place">
          Your destination or hotel name:
          <input
            id="place"
            type="text"
            placeholder="New York"
            value={search}
            onChange={searchChange}
          />
        </label>
      </EnterText>
      <EnterDate>
        <Datepicker />
      </EnterDate>
      <Filters />
      <Button>
        <input type="submit" value="Submit" />
      </Button>
    </HeaderForm>
  );
};

export default Form;
