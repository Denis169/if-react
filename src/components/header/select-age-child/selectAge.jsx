import React from 'react';

import './selectAge.scss';

const SelectAge = ({ name }) => (
  <select className="select-age" name={name} onClick={(event) => event.stopPropagation()}>
    {[...Array(17)].map((x, i) => (
      <option
        key={i.toString()}
        value={(i + 1).toString()}
      >
        {`${i + 1} years old`}
      </option>
    ))}
  </select>
);

export default SelectAge;
