import React, {useState} from "react";
import './homes.scss';
import HomesCol from "../homes-col/homes-col";
import ArrowRight from "../../Svg/arrow-right/arrow-right";
import ArrowLeft from "../../Svg/arrow-left/arrow-left";


const Homes = ({data}) => {

  const [count, setCount] = useState(0);
  let [styleLeft, setStyle] = useState(false);
  let [styleRight, setStyleR] = useState(true);

  const clickRight = event => {
    event.preventDefault();
    count < data.length - 4 && setCount(count + 1);
    count > -1 && setStyle(styleLeft = true);
    count === data.length - 5 && setStyleR(styleRight = false);
  }

  const clickLeft = event => {
    event.preventDefault();
    count > 0 && setCount(count - 1);
    count === 1 && setStyle(styleLeft = false);
    count === data.length - 4 && setStyleR(styleRight = true);
  }



  return (
    <div className="homes">
      <div className="container">
        <h2 className="homes__caption">Homes guests loves</h2>
        <div className="homes__section">
          <div className="homes__section-col" id="homes__section-col">
            {data.filter((place, i) => i >= count && i <= count + 3).map( place => (
              <HomesCol
                name={place.name}
                imageUrl={place.imageUrl}
                city={place.city}
                country={place.country}
                key={place.id}
              />
            ))}
          </div>
          {styleRight && <ArrowRight right={clickRight} key={19}/>}
          {styleLeft && <ArrowLeft left={clickLeft} key={20}/>}
        </div>
      </div>
    </div>
  )
}

export default Homes;
