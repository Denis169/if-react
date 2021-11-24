import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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

const Form = ({
  search,
  setSearch,
  available,
  availableData,
  countAvailable,
  classArrow,
}) => {
  const searchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const addAvailable = (event) => {
    event.preventDefault();

    search && available(true);

    axios.get(urlAvailable + search)
      .then((response) => {
        availableData([...response.data]);
        countAvailable(0);

        response.data.length < 5 && classArrow('homes__display-none');
        response.data.length > 4 && classArrow('');
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

const mapStateToProps = (state) => ({
  search: state.form.search,
});

const mapDispatchToProps = (dispatch) => ({
  setSearch: (value) => dispatch(inputSearchActionCreator(value)),
  available: (value) => dispatch(addAvailableActionCreator(value)),
  availableData: (value) => dispatch(availableDataActionCreator(value)),
  countAvailable: (value) => dispatch(setCountAvailableActionCreator(value)),
  classArrow: (value) => dispatch(classArrowActionCreator(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
