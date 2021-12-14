import React from 'react';
import styled from '@emotion/styled';

import ReactDatePicker from '../../reactDatePicker/reactDatePicker';

const InputDateBlock = styled.div`
  display: flex;
  padding-bottom: 4px;
  background-color: white;
  border-radius: 5px;
`;

const Datepicker = () => (
  <InputDateBlock>
    <ReactDatePicker />
  </InputDateBlock>
);

export default Datepicker;
