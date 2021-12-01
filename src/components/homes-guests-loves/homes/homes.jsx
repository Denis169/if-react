import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HomesCol from '../homes-col/homes-col';
import ArrowRight from '../../Svg/arrow-right/arrow-right';
import ArrowLeft from '../../Svg/arrow-left/arrow-left';

import './homes.scss';

const Homes = ({
  count,
  data,
  plus,
  minus,
  nameBlock,
  classArrow,
}) => {
  const [arrowRight, setArrowRight] = useState(true);
  const [arrowLeft, setArrowLeft] = useState(false);

  useEffect(() => {
    if (arrowLeft && count < 1) {
      setArrowLeft(false);
      setArrowRight(true);
    }
  }, [arrowLeft, count]);

  const clickRight = (event) => {
    event.preventDefault();
    plus(count);
    count > -1 && setArrowLeft(true);
    count === data.length - 5 && setArrowRight(false);
  };

  const clickLeft = (event) => {
    event.preventDefault();
    minus(count);
    count <= 1 && setArrowLeft(false);
    count === data.length - 4 && setArrowRight(true);
  };

  return (
    <div className="homes">
      <div className="container">
        <h2 className="homes__caption">{nameBlock}</h2>
        <div className="homes__section">
          <div className="homes__section-col" id="homes__section-col">
            {data.length === 0 && 'Match not found, try setting other search options!'}
            <nav>
              {data.filter((place, i) => i >= count && i <= count + 3).map((place) => (
                <Link to={`/hotels/${place.id}`} key={place.id}>
                  <HomesCol
                    name={place.name}
                    imageUrl={place.imageUrl}
                    city={place.city}
                    country={place.country}
                  />
                </Link>
              ))}
            </nav>
          </div>
          {arrowRight && <ArrowRight right={clickRight} classArrow={classArrow} key={19} />}
          {arrowLeft && <ArrowLeft classArrow={classArrow} left={clickLeft} key={20} />}
        </div>
      </div>
    </div>
  );
};

export default Homes;
