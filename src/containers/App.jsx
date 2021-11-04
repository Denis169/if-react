import React from "react";
import axios from "axios";

import Homes from "../components/homes-guests-loves/homes/homes";
import Header from "../components/header/header/header";

import {urlHomes, urlAvailable} from "../constants/urls";
import '../styles/index.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      available: false,
      availableData: [],
      data: [],
      condition: true,
      classArrow: '',
      countAvailable: 0,
      countHomes: 0,
    }
  }

  searchChange = (event) => {
    this.setState({search: event.target.value})
  }

  addAvailable = (event) => {
    event.preventDefault();
    this.state.search && this.setState({available: true});
    axios.get(urlAvailable + this.state.search)
      .then(response => {
        this.setState({availableData: response.data});
        this.setState({refreshCount: true});
        this.setState({countAvailable: 0})
        response.data.length < 5 && this.setState({classArrow: 'homes__display-none'});
        response.data.length > 4 && this.setState({classArrow: ''});
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  plusCountAvailable = () => this.setState({countAvailable: this.state.countAvailable + 1});
  minusCountAvailable = () => this.setState({countAvailable: this.state.countAvailable - 1});

  plusCountHomes = () => this.setState({countHomes: this.state.countHomes + 1});
  minusCountHomes = () => this.setState({countHomes: this.state.countHomes - 1});

  componentDidMount() {
    axios.get(urlHomes)
      .then(response => {
        this.setState({data: response.data})
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div>
        <Header
          search={this.state.search}
          searchChange={this.searchChange}
          addAvailable={this.addAvailable}
        />
        {this.state.available && <Homes data={this.state.availableData}
                                        classArrow={this.state.classArrow}
                                        count={this.state.countAvailable}
                                        plus={this.plusCountAvailable}
                                        minus={this.minusCountAvailable}
                                        nameBlock={'Available hotels'}/>}
        <Homes data={this.state.data}
               classArrow={''}
               count={this.state.countHomes}
               plus={this.plusCountHomes}
               minus={this.minusCountHomes}
               nameBlock={'Homes guests loves'}/>
      </div>
    );
  }

}

export default App;
