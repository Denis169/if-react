import React, { useState, useEffect } from 'react';

import HomesCol from '../homes-col/homes-col';
import ArrowRight from '../../Svg/arrow-right/arrow-right';
import ArrowLeft from '../../Svg/arrow-left/arrow-left';

import './homes.scss';

const Homes = ({
  count, data, plus, minus, nameBlock, classArrow,
}) => {
  const [styleLeft, setLeft] = useState(false);
  const [styleRight, setRight] = useState(true);

  useEffect(() => {
    if (styleLeft && count < 1) {
      setLeft(false);
      setRight(true);
    }
  }, [styleLeft, count]);

  const clickRight = (event) => {
    event.preventDefault();
    count < data.length - 4 && plus(count);
    count > -1 && setLeft(true);
    count === data.length - 5 && setRight(false);
  };

  const clickLeft = (event) => {
    event.preventDefault();
    count > 0 && minus(count);
    count <= 1 && setLeft(false);
    count === data.length - 4 && setRight(true);
  };

  return (
    <div className="homes">
      <div className="container">
        <h2 className="homes__caption">{nameBlock}</h2>
        <div className="homes__section">
          <div className="homes__section-col" id="homes__section-col">
            {data.length === 0 && 'Match not found, try setting other search options!'}
            {data.filter((place, i) => i >= count && i <= count + 3).map((place) => (
              <HomesCol
                name={place.name}
                imageUrl={place.imageUrl}
                city={place.city}
                country={place.country}
                key={place.id}
              />
            ))}
          </div>
          {styleRight && <ArrowRight right={clickRight} classArrow={classArrow} key={19} />}
          {styleLeft && <ArrowLeft classArrow={classArrow} left={clickLeft} key={20} />}
        </div>
      </div>
    </div>
  );
};

export default Homes;
