import React, { useState } from 'react';

import './selectAge.scss';

const SelectAge = ({ name }) => {
  const [optionsState] = useState();

  return (
    <select className="select-age" name={name} value={optionsState}>
      {[...Array(17)].map((x, i) => (
        <option
          key={i.toString()}
          value={i.toString() + name}
        >
          {`${i + 1} years old`}
        </option>
      ))}
    </select>
  );
};

export default SelectAge;
