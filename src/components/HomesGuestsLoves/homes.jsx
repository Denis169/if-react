import React from "react";
import HomesCol from "./homes-col";
import {ArrowRight} from "./arrow-right";
import {ArrowLeft} from "./arrow-left";



function Homes({data}) {

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
