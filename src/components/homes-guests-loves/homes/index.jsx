import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import HomesCol from '../homes-col/homes-col';
import ArrowRight from '../../Svg/arrow-right/arrow-right';
import ArrowLeft from '../../Svg/arrow-left/arrow-left';

import { countHomesActionCreator } from '../../../actionCreators';

import { HomesComponent, H2, HomesSection, HomesColumn } from './styles.module';

const Homes = () => {
  const dispatch = useDispatch();
  const countHomes = useSelector(createSelector((state) => state.homes.countHomes, (dataArray) => dataArray));
  const dataHomes = useSelector(createSelector((state) => state.homes.dataHomes, (dataArray) => dataArray));
  const [arrowRight, setArrowRight] = useState(true);
  const [arrowLeft, setArrowLeft] = useState(false);

  useEffect(() => {
    dispatch(countHomesActionCreator(0));
  }, [dataHomes]);

  const plusCountHomes = () => dispatch(countHomesActionCreator(countHomes + 1));

  const minusCountHomes = () => dispatch(countHomesActionCreator(countHomes - 1));

  const clickRight = (event) => {
    event.preventDefault();
    console.log(dataHomes);
    plusCountHomes(countHomes);
    countHomes > -1 && setArrowLeft(true);
    countHomes === dataHomes.length - 5 && setArrowRight(false);
  };

  const clickLeft = (event) => {
    event.preventDefault();
    minusCountHomes(countHomes);
    countHomes <= 1 && setArrowLeft(false);
    countHomes === dataHomes.length - 4 && setArrowRight(true);
  };

  return (
    <HomesComponent>
      <H2>Homes guests loves</H2>
      <HomesSection>
        <HomesColumn>
          <nav>
            {dataHomes.filter((place, i) => i >= countHomes && i <= countHomes + 3).map((place) => (
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
        </HomesColumn>
        {arrowRight && <ArrowRight right={clickRight} classArrow="" key={19} />}
        {arrowLeft && <ArrowLeft left={clickLeft} classArrow="" key={20} />}
      </HomesSection>
    </HomesComponent>
  );
};

export default Homes;
