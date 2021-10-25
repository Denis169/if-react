import React from "react";

function HomesCol(props) {
  return (
    <div className="homes__col">
      <img className="homes__images" src={props.imageUrl} alt="Hotel" />
      <a className="homes__link" href="https://intellectfox.by/">{props.name}</a>
      <p className="homes__text">{props.city}, {props.country}</p>
    </div>
  )
}

export default HomesCol;
