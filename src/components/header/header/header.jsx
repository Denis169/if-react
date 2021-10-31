import React from "react";
import "./header.scss";
import Form from "../form/form";

const Header = ({search, searchChange, addAvailable}) => {


  return(

  <header>
    <div className="container">
      <div className="header__top-section">
        <h1>Discover stays <br/> to live, work or just relax</h1>
        <Form
          search={search}
          searchChange={searchChange}
          addAvailable={addAvailable}/>
      </div>
    </div>
  </header>
  )}

export default Header;