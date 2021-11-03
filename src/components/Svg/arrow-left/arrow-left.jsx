import React from "react";
import arrowSlider from '../../image/arrow-slider.svg'
import './arrow-left.scss'

const ArrowLeft = ({left, classArrow}) => {
  return (
    <div className={"homes__svg_arrow-left" + classArrow} id="homes-arrow-left" onClick={left}>
      <img className={classArrow} src={arrowSlider} alt="right"/>
    </div>
  )
}

export default ArrowLeft;