import React from 'react';

import './homes-col.scss';

const HomesCol = ({
  imageUrl, name, city, country,
}) => (
  <div className="homes__col">
    <img className="homes__images" src={imageUrl} alt="Hotel" />
    <p className="homes__link">{name}</p>
    <p className="homes__text">
      {city}
      ,
      {' '}
      {country}
    </p>
  </div>
);

export default HomesCol;
