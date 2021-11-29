import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import SelectAge from '../select-age-child/selectAge';

import {
  currentAdultsActionCreator,
  currentChildrenActionCreator,
  currentRoomsActionCreator,
} from '../../../actionCreators';

import './filter-counter.scss';

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
    <div className="header__filter-component">
      <div className="header__filter-counters">
        <div className="header__filter-adults">
          <p>Adults</p>
          <div className="header__filter-counter">
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
          </div>
        </div>
        <div className="header__filter-children">
          <p>Children</p>
          <div className="header__filter-counter">
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
          </div>
        </div>
        <div className="header__filter-room">
          <p>Room</p>
          <div className="header__filter-counter">
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
          </div>
        </div>
      </div>
      <div className={currentChildren > filterCounts.children.min
        ? 'header__filter-children-age'
        : 'display-none'}
      >
        <p id="children">
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
      </div>
    </div>
  );
};

export default FilterCounter;
