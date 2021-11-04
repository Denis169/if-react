import React from "react";
import arrowSlider from '../../../assets/image/arrow-slider.svg'
import './arrow-right.scss';

const ArrowRight = ({right, classArrow}) => {
  return (
    <div className={"homes__svg_arrow-right" + classArrow} id="homes-arrow-right" onClick={right}>
      <img className={classArrow} src={arrowSlider} alt="right"/>
    </div>
  )
}

export default ArrowRight;

