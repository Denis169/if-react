import React from 'react';

import Filters from '../filters/filters';

import './form.scss';

const Form = ({ search, searchChange, addAvailable }) => (
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

export default Form;
