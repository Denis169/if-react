import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker-cssmodules.scss';
import { dateEndDatepickerActionCreator, dateStartDatepickerActionCreator } from '../../actionCreators';

const ReactDatePicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    dispatch(dateStartDatepickerActionCreator(startDate));
    dispatch(dateEndDatepickerActionCreator(endDate));
  }, [startDate, endDate]);

  return (
    <>
      <DatePicker
        dateFormat="dd MMM yyyy"
        placeholderText="Check in"
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        dateFormat="dd MMM yyyy"
        placeholderText="Check out"
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={(date) => setEndDate(date)}
      />
    </>
  );
};

export default ReactDatePicker;
