import {ALL_STATES, LOGIN_USER, LOGOUT} from '../action/types';

const initialState = {
  user: {},
  allStates: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ALL_STATES:
      return {
        ...state,
        allStates: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
