import React from "react";
import data from "./Data";
import HomesCol from "./HomesCol";
import arrowSlider from './picture/arrow-slider.svg';


function Homes() {
  return (
    <div className="homes">
      <div className="container">
        <h2 className="homes__caption">Homes guests loves</h2>
        <div className="homes__section">
          <div className="homes__section-col" id="homes__section-col">
            {data.map((place) => (
              <HomesCol
                name = {place.name}
                imageUrl = {place.imageUrl}
                city = {place.city}
                country = {place.country}
                key = {place.id}
              />
              )
            )}
          </div>
          <div className="homes__svg_arrow-right" id="homes-arrow-right">
            <img src={arrowSlider} alt="slider" />
          </div>
          <div className="homes__svg_arrow-left" id="homes-arrow-left">
            <img src={arrowSlider} alt="slider" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homes;
