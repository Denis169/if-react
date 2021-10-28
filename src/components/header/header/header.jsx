import React from "react";
import "./header.scss";
import img from '../../image/castelmezzano.png';

const Header = () => {
  return(

  <header>
    <div className="container">
      <img src={require('../../image/castelmezzano.png').default} alt="dsdsafar"/>
      <div className="header__top-section">
        <h1>Discover stays <br/> to live, work or just relax</h1>
        <form className="header__form" id="form-destination">
          <div className="header__input-place-block">
            <label htmlFor="place" className="label">Your destination or hotel name</label>
            <input className="header__input input-place " id="place" type="text" placeholder="New York"
                   name="destinationOrHotel"/>
          </div>
          <div className="header__input-date-block">
            <p className="header__input input-date" id="chose-date">Check-in — Check-out</p>
          </div>
          <div className="header__input-adults-block" id="peopleFilter">
            <p className="header__input input-adults" id="Adults-Children-Room">2 Adults - 0 Children - 1 Room</p>
          </div>
          <div className="header__input-button-block">
            <button className="header__input input-button" type="submit" value="Search"/>
          </div>
        </form>
      </div>
    </div>
  </header>
  )}

export default Header;