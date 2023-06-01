import { types } from "../types/types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        activeUser: action.payload,
        checking: false,
        logged: true,
      };
    case types.checkingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};
