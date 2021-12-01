import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import FilterCounter from '../filter-counter/filter-counter';

import { showFiltersActionCreator } from '../../../actionCreators';

import './filters.scss';

const Filters = () => {
  const dispatch = useDispatch();
  const showFilters = useSelector(createSelector((state) => state.filters.showFilters, (data) => data));
  const currentAdults = useSelector(createSelector((state) => state.filters.currentAdults, (data) => data));
  const currentChildren = useSelector(createSelector((state) => state.filters.currentChildren, (data) => data));
  const currentRooms = useSelector(createSelector((state) => state.filters.currentRooms, (data) => data));

  const showBlock = (event) => {
    showFilters ? dispatch(showFiltersActionCreator(false)) : dispatch(showFiltersActionCreator(true));
    event.stopPropagation();
  };

  return (
    <>
      <button type="button" className="header__input-adults-block" onClick={showBlock}>
        <p className="header__input input__adults">
          { `${currentAdults} Adults - ${currentChildren} Children - ${currentRooms} Room`}
        </p>
      </button>
      {showFilters && <FilterCounter />}
    </>
  );
};

export default Filters;
