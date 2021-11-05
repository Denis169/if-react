import React from 'react';

import arrowSlider from '../../../assets/image/arrow-slider.svg';

import './arrow-left.scss';

const ArrowLeft = ({ left, classArrow }) => (
  <div role="button" tabIndex={0} className={`homes__svg_arrow-left${classArrow}`} onClick={left} onKeyDown={left}>
    <img className={classArrow} src={arrowSlider} alt="right" />
  </div>
);

export default ArrowLeft;
