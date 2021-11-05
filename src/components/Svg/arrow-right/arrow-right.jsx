import React from 'react';

import arrowSlider from '../../../assets/image/arrow-slider.svg';

import './arrow-right.scss';

const ArrowRight = ({ right, classArrow }) => (
  <div role="button" tabIndex={0} className={`homes__svg_arrow-right${classArrow}`} onClick={right} onKeyDown={right}>
    <img className={classArrow} src={arrowSlider} alt="right" />
  </div>
);

export default ArrowRight;
