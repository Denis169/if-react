import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  border: 1px solid ${(props) => props.theme.primary};
  font-size: 12px;
  line-height: 14px;
  margin: 12px 8px 0 8px;
  width: 99px;
  height: 30px;
  background-color: ${(props) => props.theme.white};
`;

const SelectAge = ({ name }) => (
  <Select selected="1" name={name} onClick={(event) => event.stopPropagation()}>
    {[...Array(17)].map((x, i) => (
      <option
        key={i.toString()}
        value={(i + 1).toString()}
      >
        {`${i + 1} years old`}
      </option>
    ))}
  </Select>
);

export default SelectAge;
