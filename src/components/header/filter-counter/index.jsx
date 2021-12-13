import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import SelectAge from '../select-age-child';

import {
  currentAdultsActionCreator,
  currentChildrenActionCreator,
  currentRoomsActionCreator,
} from '../../../actionCreators';

import { FilterComponent, FilterCounters, AdultsChildrenRoom, PCounters, FilterCounterComponent, FilterChildrenAge } from './style.module';

const FilterCounter = () => {
  const filterCounts = {
    adults: {
      min: 1,
      max: 30,
    },
    children: {
      min: 0,
      max: 10,
      maximumAge: 17,
    },
    rooms: {
      min: 1,
      max: 30,
    },
  };

  const dispatch = useDispatch();

  const currentAdults = useSelector(createSelector((state) => state.filters.currentAdults, (data) => data));
  const currentChildren = useSelector(createSelector((state) => state.filters.currentChildren, (data) => data));
  const currentRooms = useSelector(createSelector((state) => state.filters.currentRooms, (data) => data));

  const plus = (current, variant, seCurrent) => {
    if (current < variant.max) dispatch(seCurrent(current + 1));
  };

  const minus = (current, variant, seCurrent) => {
    if (current > variant.min) dispatch(seCurrent(current - 1));
  };

  return (
    <FilterComponent>
      <FilterCounters>
        <AdultsChildrenRoom>
          <PCounters>Adults</PCounters>
          <FilterCounterComponent>
            <button
              className={currentAdults === filterCounts.adults.min ? 'button-off' : ''}
              type="button"
              onClick={() => minus(
                currentAdults,
                filterCounts.adults,
                currentAdultsActionCreator,
              )}
            >
              &ndash;
            </button>
            <p>{currentAdults}</p>
            <button
              className={currentAdults === filterCounts.adults.max ? 'button-off' : ''}
              type="button"
              onClick={() => plus(
                currentAdults,
                filterCounts.adults,
                currentAdultsActionCreator,
              )}
            >
              &#43;
            </button>
          </FilterCounterComponent>
        </AdultsChildrenRoom>
        <AdultsChildrenRoom>
          <PCounters>Children</PCounters>
          <FilterCounterComponent>
            <button
              className={currentChildren === filterCounts.children.min ? 'button-off' : ''}
              type="button"
              onClick={() => minus(
                currentChildren,
                filterCounts.children,
                currentChildrenActionCreator,
              )}
            >
              &ndash;
            </button>
            <p>{currentChildren}</p>
            <button
              className={currentChildren === filterCounts.children.max ? 'button-off' : ''}
              type="button"
              onClick={() => plus(
                currentChildren,
                filterCounts.children,
                currentChildrenActionCreator,
              )}
            >
              &#43;
            </button>
          </FilterCounterComponent>
        </AdultsChildrenRoom>
        <AdultsChildrenRoom>
          <PCounters>Room</PCounters>
          <FilterCounterComponent>
            <button
              className={currentRooms === filterCounts.rooms.min ? 'button-off' : ''}
              type="button"
              onClick={() => minus(
                currentRooms,
                filterCounts.rooms,
                currentRoomsActionCreator,
              )}
            >
              &ndash;
            </button>
            <p>{currentRooms}</p>
            <button
              className={currentRooms === filterCounts.rooms.max ? 'button-off' : ''}
              type="button"
              onClick={() => plus(
                currentRooms,
                filterCounts.rooms,
                currentRoomsActionCreator,
              )}
            >
              &#43;
            </button>
          </FilterCounterComponent>
        </AdultsChildrenRoom>
      </FilterCounters>
      {currentChildren > filterCounts.children.min && (
      <FilterChildrenAge>
        <p>
          What is the age of the child you’re
          {' '}
          <br />
          {' '}
          travelling with?
        </p>
        {[...Array(currentChildren)].map((item, i) => (
          <SelectAge
            name={i.toString()}
            key={i.toString()}
          />
        ))}
      </FilterChildrenAge>
      )}
    </FilterComponent>
  );
};

export default FilterCounter;
