import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import HomesCol from '../homes-col/homes-col';
import ArrowRight from '../../Svg/arrow-right/arrow-right';
import ArrowLeft from '../../Svg/arrow-left/arrow-left';

import { setCountAvailableActionCreator } from '../../../actionCreators';

import './available.scss';

const Available = () => {
  const dispatch = useDispatch();
  const classArrow = useSelector(createSelector((state) => state.form.classArrow, (dataArray) => dataArray));
  const availableData = useSelector(createSelector((state) => state.form.availableData, (dataArray) => dataArray));
  const countAvailable = useSelector(createSelector((state) => state.form.countAvailable, (dataArray) => dataArray));
  const [arrowRight, setArrowRight] = useState(true);
  const [arrowLeft, setArrowLeft] = useState(false);

  const plusCountAvailable = () => dispatch(setCountAvailableActionCreator(countAvailable + 1));

  const minusCountAvailable = () => dispatch(setCountAvailableActionCreator(countAvailable - 1));

  useEffect(() => {
    if (arrowLeft && countAvailable < 1) {
      setArrowLeft(false);
      setArrowRight(true);
    }
  }, [arrowLeft, countAvailable]);

  const clickRight = (event) => {
    event.preventDefault();
    plusCountAvailable(countAvailable);
    countAvailable > -1 && setArrowLeft(true);
    countAvailable === availableData.length - 5 && setArrowRight(false);
  };

  const clickLeft = (event) => {
    event.preventDefault();
    minusCountAvailable(countAvailable);
    countAvailable <= 1 && setArrowLeft(false);
    countAvailable === availableData.length - 4 && setArrowRight(true);
  };

  return (
    <div className="homes">
      <div className="container">
        <h2 className="available__caption">Available hotels</h2>
        <div className="available__section">
          <div className="available__section-col" id="available__section-col">
            {availableData.length === 0 && 'Match not found, try setting other search options!'}
            <nav>
              {availableData.filter((place, i) => i >= countAvailable && i <= countAvailable + 3).map((place) => (
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

export default Available;
