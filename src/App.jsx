import React from "react";
import './styles/index.scss';
import Homes from "./components/homes-guests-loves/homes/homes";
import data from "./Data";


function App() {
  return (
    <div>
      <Homes data={data}/>
    </div>
  );
}

export default App;
