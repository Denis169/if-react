import React from 'react';

import ReactDatePicker from '../../reactDatePicker/reactDatePicker';

import './datepicker.scss';

const Datepicker = () => (
  <>
    <div className="header__input-date-block">
      <ReactDatePicker />
    </div>
  </>
);

export default Datepicker;
