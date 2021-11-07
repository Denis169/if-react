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

  const plusAdults = (event) => {
    if (currentAdults < filterCounts.adults.max) setAdults(currentAdults + 1);
    if (currentAdults === filterCounts.adults.max - 1) setAdultsPlus('button-off');
    if (currentAdults !== filterCounts.adults.min - 1) setAdultsMinus('');
    event.stopPropagation();
  };

  const minusAdults = (event) => {
    if (currentAdults > filterCounts.adults.min) setAdults(currentAdults - 1);
    if (currentAdults === filterCounts.adults.min + 1) setAdultsMinus('button-off');
    if (currentAdults !== filterCounts.adults.max - 1) setAdultsPlus('');
    event.stopPropagation();
  };

  const plusChildren = (event) => {
    if (currentChildren < filterCounts.children.max) setChildren(currentChildren + 1);
    if (currentChildren === filterCounts.children.max - 1) setChildrenPlus('button-off');
    if (currentChildren !== filterCounts.children.min - 1) {
      setChildrenMinus('');
      setAgeChildOff('header__filter-children-age');
    }
    event.stopPropagation();
  };

  const minusChildren = (event) => {
    if (currentChildren > filterCounts.children.min) setChildren(currentChildren - 1);
    if (currentChildren === filterCounts.children.min + 1) {
      setChildrenMinus('button-off');
      setAgeChildOff('header__filter-children-age display-none');
    }
    if (currentChildren !== filterCounts.children.max - 1) setChildrenPlus('');
    event.stopPropagation();
  };

  const plusRooms = (event) => {
    if (currentRooms < filterCounts.rooms.max) setRooms(currentRooms + 1);
    if (currentRooms === filterCounts.rooms.max - 1) setRoomsPlus('button-off');
    if (currentRooms !== filterCounts.rooms.min - 1) setRoomsMinus('');
    event.stopPropagation();
  };

  const minusRooms = (event) => {
    if (currentRooms > filterCounts.rooms.min) setRooms(currentRooms - 1);
    if (currentRooms === filterCounts.rooms.min + 1) setRoomsMinus('button-off');
    if (currentRooms !== filterCounts.rooms.max - 1) setRoomsPlus('');
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
              <button className={adultsMinus} type="button" onClick={minusAdults}>&ndash;</button>
              <p className="header__adults__quantity__js">{currentAdults}</p>
              <button className={adultsPlus} type="button" onClick={plusAdults}>&#43;</button>
            </div>
          </div>
          <div className="header__filter-children">
            <p>Children</p>
            <div className="header__filter-counter">
              <button className={childrenMinus} type="button" onClick={minusChildren}>&ndash;</button>
              <p>{currentChildren}</p>
              <button className={childrenPlus} type="button" onClick={plusChildren}>&#43;</button>
            </div>
          </div>
          <div className="header__filter-room">
            <p>Room</p>
            <div className="header__filter-counter">
              <button className={roomsMinus} type="button" onClick={minusRooms}>&ndash;</button>
              <p>{currentRooms}</p>
              <button className={roomsPlus} type="button" onClick={plusRooms}>&#43;</button>
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
          {[...Array(currentChildren)].map((item, i) => <SelectAge key={i.toString()} />)}
        </div>
      </div>
    </button>

  );
};

export default Filters;
