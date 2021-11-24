import {
  COLOR_ACCOUNT,
} from '../constants';

const initialState = {
  colorAccount: false,
};

function logoNavReducer(state = initialState, action) {
  switch (action.type) {
    case COLOR_ACCOUNT:
      return { ...state, colorAccount: action.payload };
    default:
      return state;
  }
}

export default logoNavReducer;
