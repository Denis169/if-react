import { AUTHORIZATION, INPUT_MAIL, INPUT_PASSWORD } from '../constants';

const initialState = {
  mail: '',
  password: '',
  authorization: false,
};

function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_MAIL:
      return { ...state, mail: action.payload };
    case INPUT_PASSWORD:
      return { ...state, password: action.payload };
    case AUTHORIZATION:
      return { ...state, authorization: action.payload };
    default:
      return state;
  }
}

export default authorizationReducer;
