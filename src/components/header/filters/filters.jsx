import React, { useState } from 'react';

import './filters.scss';
import SelectAge from '../select-age-child/selectAge';

const Filters = () => {
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

  const [currentAdults, setAdults] = useState(2);
  const [currentChildren, setChildren] = useState(0);
  const [currentRooms, setRooms] = useState(1);
  const [show, setShow] = useState(false);
  const [noShow, setNoShow] = useState('header__filter-people display-none');
  const [adultsPlus, setAdultsPlus] = useState('');
  const [adultsMinus, setAdultsMinus] = useState('');
  const [childrenPlus, setChildrenPlus] = useState('');
  const [childrenMinus, setChildrenMinus] = useState('button-off');
  const [roomsPlus, setRoomsPlus] = useState('');
  const [roomsMinus, setRoomsMinus] = useState('button-off');
  const [ageChildOff, setAgeChildOff] = useState('header__filter-children-age display-none');

  const showBlock = () => {
    if (show) {
      setShow(false);
      setNoShow('header__filter-people display-none');
    } else {
      setShow(true);
      setNoShow('header__filter-people');
    }
  };

  const plus = (event, current, variant, setCurrent, setClassPlus, setClassMinus) => {
    if (current < variant.max) setCurrent(current + 1);
    if (current === variant.max - 1) setClassPlus('button-off');
    if (current !== variant.min - 1) {
      setClassMinus('');
      variant.maximumAge && setAgeChildOff('header__filter-children-age');
    }
    event.stopPropagation();
  };

  const minus = (event, current, variant, setCurrent, setClassPlus, setClassMinus) => {
    if (current > variant.min) setCurrent(current - 1);
    if (current === variant.min + 1) {
      setClassMinus('button-off');
      variant.maximumAge && setAgeChildOff('header__filter-children-age display-none');
    }
    if (current !== variant.max - 1) setClassPlus('');
    event.stopPropagation();
  };

  return (

    <button type="button" className="header__input-adults-block" onClick={showBlock}>
      <p className="header__input input__adults">
        { `${currentAdults} Adults - ${currentChildren} Children - ${currentRooms} Room`}
      </p>
      <div className={noShow}>
        <div className="header__filter-counters">
          <div className="header__filter-adults">
            <p>Adults</p>
            <div className="header__filter-counter">
              <button
                className={adultsMinus}
                type="button"
                onClick={(event) => minus(
                  event,
                  currentAdults,
                  filterCounts.adults,
                  setAdults,
                  setAdultsPlus,
                  setAdultsMinus,
                )}
              >
                &ndash;
              </button>
              <p>{currentAdults}</p>
              <button
                className={adultsPlus}
                type="button"
                onClick={(event) => plus(
                  event,
                  currentAdults,
                  filterCounts.adults,
                  setAdults,
                  setAdultsPlus,
                  setAdultsMinus,
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
                className={childrenMinus}
                type="button"
                onClick={(event) => minus(
                  event,
                  currentChildren,
                  filterCounts.children,
                  setChildren,
                  setChildrenPlus,
                  setChildrenMinus,
                )}
              >
                &ndash;
              </button>
              <p>{currentChildren}</p>
              <button
                className={childrenPlus}
                type="button"
                onClick={(event) => plus(
                  event,
                  currentChildren,
                  filterCounts.children,
                  setChildren,
                  setChildrenPlus,
                  setChildrenMinus,
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
                className={roomsMinus}
                type="button"
                onClick={(event) => minus(
                  event,
                  currentRooms,
                  filterCounts.rooms,
                  setRooms,
                  setRoomsPlus,
                  setRoomsMinus,
                )}
              >
                &ndash;
              </button>
              <p>{currentRooms}</p>
              <button
                className={roomsPlus}
                type="button"
                onClick={(event) => plus(
                  event,
                  currentRooms,
                  filterCounts.rooms,
                  setRooms,
                  setRoomsPlus,
                  setRoomsMinus,
                )}
              >
                &#43;
              </button>
            </div>
          </div>
        </div>
        <div className={ageChildOff}>
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
    </button>

  );
};

export default Filters;
