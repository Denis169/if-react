import React, { useState } from 'react';

import FilterCounter from '../filter-counter/filter-counter';

import './filters.scss';

const Filters = () => {
  const [show, setShow] = useState(false);

  const [currentAdults, setAdults] = useState(2);
  const [currentChildren, setChildren] = useState(0);
  const [currentRooms, setRooms] = useState(1);

  const showBlock = (event) => {
    show ? setShow(false) : setShow(true);
    event.stopPropagation();
  };

  return (
    <>
      <button type="button" className="header__input-adults-block" onClick={showBlock}>
        <p className="header__input input__adults">
          { `${currentAdults} Adults - ${currentChildren} Children - ${currentRooms} Room`}
        </p>
      </button>
      {show && (
      <FilterCounter
        currentAdults={currentAdults}
        setAdults={setAdults}
        currentChildren={currentChildren}
        setChildren={setChildren}
        currentRooms={currentRooms}
        setRooms={setRooms}
      />
      )}
    </>
  );
};

export default Filters;
