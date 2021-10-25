import React from "react";
import './styles/index.scss';
import Homes from "./components/HomesGuestsLoves/homes";
import data from "./Data";


function App() {
  return (
    <div className="App">
      <Homes data={data}/>
    </div>
  );
}


export default App;
