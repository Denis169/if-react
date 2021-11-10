import React from 'react';

import SelectAge from '../select-age-child/selectAge';

import './filter-counter.scss';

const FilterCounter = ({
  currentAdults,
  setAdults,
  currentChildren,
  setChildren,
  currentRooms,
  setRooms,
}) => {
  const filterCounts = {
    adults: {
      min: 0,
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

  const plus = (event, current, variant, setCurrent) => {
    if (current < variant.max) setCurrent(current + 1);
    event.stopPropagation();
  };

  const minus = (event, current, variant, setCurrent) => {
    if (current > variant.min) setCurrent(current - 1);
    event.stopPropagation();
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
              onClick={(event) => minus(
                event,
                currentAdults,
                filterCounts.adults,
                setAdults,
              )}
            >
              &ndash;
            </button>
            <p>{currentAdults}</p>
            <button
              className={currentAdults === filterCounts.adults.max ? 'button-off' : ''}
              type="button"
              onClick={(event) => plus(
                event,
                currentAdults,
                filterCounts.adults,
                setAdults,
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
              onClick={(event) => minus(
                event,
                currentChildren,
                filterCounts.children,
                setChildren,
              )}
            >
              &ndash;
            </button>
            <p>{currentChildren}</p>
            <button
              className={currentChildren === filterCounts.children.max ? 'button-off' : ''}
              type="button"
              onClick={(event) => plus(
                event,
                currentChildren,
                filterCounts.children,
                setChildren,
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
              onClick={(event) => minus(
                event,
                currentRooms,
                filterCounts.rooms,
                setRooms,
              )}
            >
              &ndash;
            </button>
            <p>{currentRooms}</p>
            <button
              className={currentRooms === filterCounts.rooms.max ? 'button-off' : ''}
              type="button"
              onClick={(event) => plus(
                event,
                currentRooms,
                filterCounts.rooms,
                setRooms,
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
