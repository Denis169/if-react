import React from 'react';

import { Column, Image, Text, Reference } from './styles.module';

const HomesCol = ({
  imageUrl, name, city, country,
}) => (
  <Column>
    <Image img={imageUrl} />
    <Reference>{name}</Reference>
    <Text className="homes__text">
      {city}
      ,
      {' '}
      {country}
    </Text>
  </Column>
);

export default HomesCol;
