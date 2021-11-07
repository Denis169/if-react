import React from 'react';

import './selectAge.scss';

const SelectAge = () => (
  <select className="select-age" name="selectAge">
    {[...Array(17)].map((x, i) => <option key={i.toString()} value={i.toString()}>{`${i + 1} years old`}</option>)}
  </select>
);

export default SelectAge;
