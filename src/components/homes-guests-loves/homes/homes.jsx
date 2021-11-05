import React from 'react';

import HomesCol from '../homes-col/homes-col';
import ArrowRight from '../../Svg/arrow-right/arrow-right';
import ArrowLeft from '../../Svg/arrow-left/arrow-left';

import './homes.scss';

class Homes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleLeft: false,
      styleRight: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.count !== prevProps.count && this.state.styleLeft && this.props.count < 1) {
      this.setState({ styleLeft: false });
      this.setState({ styleRight: true });
    }
  }

  clickRight = (event) => {
    event.preventDefault();
    this.props.count < this.props.data.length - 4 && this.props.plus(this.props.count);
    this.props.count > -1 && this.setState({ styleLeft: true });
    this.props.count === this.props.data.length - 5 && this.setState({ styleRight: false });
  }

  clickLeft = (event) => {
    event.preventDefault();
    this.props.count > 0 && this.props.minus(this.props.count);
    this.props.count <= 1 && this.setState({ styleLeft: false });
    this.props.count === this.props.data.length - 4 && this.setState({ styleRight: true });
  }

  render() {
    return (
      <div className="homes">
        <div className="container">
          <h2 className="homes__caption">{this.props.nameBlock}</h2>
          <div className="homes__section">
            <div className="homes__section-col" id="homes__section-col">
              {this.props.data.length === 0 && 'Match not found, try setting other search options!'}
              {this.props.data
                .filter((place, i) => i >= this.props.count && i <= this.props.count + 3)
                .map((place) => (
                  <HomesCol
                    name={place.name}
                    imageUrl={place.imageUrl}
                    city={place.city}
                    country={place.country}
                    key={place.id}
                  />
                ))}
            </div>
            {this.state.styleRight && (
            <ArrowRight
              right={this.clickRight}
              classArrow={this.props.classArrow}
              key={19}
            />
            )}
            {this.state.styleLeft && (
            <ArrowLeft
              classArrow={this.props.classArrow}
              left={this.clickLeft}
              key={20}
            />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Homes;
