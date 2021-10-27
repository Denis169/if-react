import React from "react";
import './arrow-right.scss';

const ArrowRight = ({right}) => {
  return (
    <div className="homes__svg_arrow-right" id="homes-arrow-right" onClick={right}>
      <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.17647 1.00001L9.38823 7.15884C10.0993 7.69217 11.0771 7.69217 11.7882 7.15884L20 1.00001" stroke="#383838" strokeWidth="2"/>
      </svg>
    </div>
  )
}

export default ArrowRight;

