import React from "react";
import './homes.scss';
import HomesCol from "../homes-col/homes-col";
import ArrowRight from "../../Svg/arrow-right/arrow-right";
import ArrowLeft from "../../Svg/arrow-left/arrow-left";


class Homes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      styleLeft: false,
      styleRight: true,
    }
  }

  componentDidMount() {
    this.props.data.length < 5 && this.setState({styleRight: false});
  }

  clickRight = (event) => {
    event.preventDefault();
    this.state.count < this.props.data.length - 4 && this.setState({count: this.state.count + 1});
    this.state.count > -1 && this.setState({styleLeft: true});
    this.state.count === this.props.data.length - 5 && this.setState({styleRight: false});
  }

  clickLeft = (event) => {
    event.preventDefault();
    this.state.count > 0 && this.setState({count: this.state.count - 1});
    this.state.count === 1 && this.setState({styleLeft: false});
    this.state.count === this.props.data.length - 4 && this.setState({styleRight: true});
  }

  render() {
    return (
      <div className="homes">
        <div className="container">
          <h2 className="homes__caption">{this.props.nameBlock}</h2>
          <div className="homes__section">
            <div className="homes__section-col" id="homes__section-col">
              {this.props.data.length === 0 && "Match not found, try setting other search options!"}
              {this.props.data.filter((place, i) => i >= this.state.count && i <= this.state.count + 3).map(place => (
                <HomesCol
                  name={place.name}
                  imageUrl={place.imageUrl}
                  city={place.city}
                  country={place.country}
                  key={place.id}
                />
              ))}
            </div>
            {this.state.styleRight && <ArrowRight right={this.clickRight} key={19}/>}
            {this.state.styleLeft && <ArrowLeft left={this.clickLeft} key={20}/>}
          </div>
        </div>
      </div>
    )
  }

}

export default Homes;
