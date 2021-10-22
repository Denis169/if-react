import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import data from "./components/HomesGuestsLoves/Data";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const sliderRight = document.getElementById('homes-arrow-right');
const sliderLeft = document.getElementById('homes-arrow-left');

let count = 0;

const visionElement = (count) => {
  const arrayPlaces = document.getElementsByClassName('homes__col');
  Array.from(arrayPlaces).forEach( (place, i) => {
    place.classList.add('homes__no-display');
    if ( count < data.length - 4 && i < count + 4 && i >= count ) {
      place.classList.remove('homes__no-display')
    } else if (count >= data.length - 4 && i >= count) {
      place.classList.remove('homes__no-display')
    }
  })
  if (count === data.length - 4) {
    sliderRight.classList.add('homes__no-display');
  }
  if (count === data.length - 5) {
    sliderRight.classList.remove('homes__no-display');
  }
  if (count === 0) {
    sliderLeft.classList.add('homes__no-display');
  }
  if (count === 1) {
    sliderLeft.classList.remove('homes__no-display');
  }
}

visionElement(count);

const changeColRight = () => {
  count === data.length - 1 ? count = 0 : count++;
  visionElement(count);
}

const changeColLeft = () => {
  count === 0 ? count = data.length - 1 : count--;
  visionElement(count);
}
sliderRight.addEventListener('click', changeColRight);
sliderLeft.addEventListener('click', changeColLeft);

