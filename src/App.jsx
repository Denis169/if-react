import React from "react";
import './styles/index.scss';
import Homes from "./components/homes-guests-loves/homes/homes";
import data from "./Data";
import Header from "./components/header/header/header";


function App() {
  return (
    <div>
      <Header />
      <Homes data={data}/>
    </div>
  );
}

export default App;
