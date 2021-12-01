import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { createSelector } from 'reselect';

import Filters from '../filters/filters';

import { urlAvailable } from '../../../constants/urls';

import {
  addAvailableActionCreator,
  availableDataActionCreator,
  classArrowActionCreator,
  inputSearchActionCreator,
  setCountAvailableActionCreator,
} from '../../../actionCreators';

import './form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const search = useSelector(createSelector((state) => state.form.search, (data) => data));

  const searchChange = (event) => {
    event.preventDefault();
    dispatch(inputSearchActionCreator(event.target.value));
  };

  const addAvailable = (event) => {
    event.preventDefault();

    search && dispatch(addAvailableActionCreator(true));

    axios.get(urlAvailable + search)
      .then((response) => {
        dispatch(availableDataActionCreator([...response.data]));
        dispatch(setCountAvailableActionCreator(0));

        response.data.length < 5 && dispatch(classArrowActionCreator('homes__display-none'));
        response.data.length > 4 && dispatch(classArrowActionCreator(''));
      })
      .catch((error) => {
        console.log('error', error);
      });
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
        <p className="header__input input__date" id="chose-date">Check-in — Check-out</p>
      </div>
      <Filters />
      <div className="header__input-button-block">
        <input className="header__input input-button" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
