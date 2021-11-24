import React from 'react';
import { connect } from 'react-redux';

import FilterCounter from '../filter-counter/filter-counter';

import { showFiltersActionCreator } from '../../../actionCreators';

import './filters.scss';

const Filters = ({
  show,
  setShow,
  currentAdults,
  currentChildren,
  currentRooms,
}) => {
  const showBlock = (event) => {
    show ? setShow(false) : setShow(true);
    event.stopPropagation();
  };

  return (
    <>
      <button type="button" className="header__input-adults-block" onClick={showBlock}>
        <p className="header__input input__adults">
          { `${currentAdults} Adults - ${currentChildren} Children - ${currentRooms} Room`}
        </p>
      </button>
      {show && <FilterCounter />}
    </>
  );
};

const mapStateToProps = (state) => ({
  show: state.filters.showFilters,
  currentAdults: state.filters.currentAdults,
  currentChildren: state.filters.currentChildren,
  currentRooms: state.filters.currentRooms,
});

const mapDispatchToProps = (dispatch) => ({
  setShow: (value) => dispatch(showFiltersActionCreator(value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
