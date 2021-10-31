import React from "react";
import './styles/index.scss';
import Homes from "./components/homes-guests-loves/homes/homes";
import data from "./Data";
import Header from "./components/header/header/header";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      available: false,
      availableData: [],
    }
  }

  searchChange = (event) => {
    this.setState({search: event.target.value})
  }

  addAvailable = (event) => {
    event.preventDefault();
    this.state.search && this.setState({available: true});
    this.setState( {availableData: data.filter(item => Object.values(item).join().toLowerCase().includes(this.state.search))})
  }

  render() {
    return (
      <div>
        <Header
          search={this.state.search}
          searchChange={this.searchChange}
          addAvailable={this.addAvailable}
        />
        {this.state.available && <Homes data={this.state.availableData} nameBlock={'Available hotels'}/>}
        <Homes data={data} nameBlock={'Homes guests loves'}/>
      </div>
    );
  }

}

export default App;
