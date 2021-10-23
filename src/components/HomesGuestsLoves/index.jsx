import React from "react";
import data from "./Data";
import HomesCol from "./HomesCol";
import {ArrowRight} from "./ArrowRight";
import {ArrowLeft} from "./ArrowLeft";



function Homes() {

  const placesViem = data.map((place) => (
      <HomesCol
        name = {place.name}
        imageUrl = {place.imageUrl}
        city = {place.city}
        country = {place.country}
        key = {place.id}
      />
    )
  );

  return (
    <div className="homes">
      <div className="container">
        <h2 className="homes__caption">Homes guests loves</h2>
        <div className="homes__section">
          <div className="homes__section-col" id="homes__section-col">
            {placesViem}
          </div>
          <ArrowRight />
          <ArrowLeft />
        </div>
      </div>
    </div>
  )
}

export default Homes;
