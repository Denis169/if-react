import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import styled from '@emotion/styled';

import FilterCounter from '../filter-counter';

import { showFiltersActionCreator } from '../../../actionCreators';

const Button = styled.button`
  flex-basis: 26%;
  position: relative;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const P = styled.p`
  padding: 0 25px 0 25px;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
`;

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
      <Button type="button" onClick={showBlock}>
        <P>
          {`${currentAdults} Adults - ${currentChildren} Children - ${currentRooms} Room`}
        </P>
      </Button>
      {showFilters && <FilterCounter />}
    </>
  );
};

export default Filters;
