import { types } from "../types/types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
        checking: false,
        logged: true,
      };

    case types.addUser:
      return {
        ...state,
      };

    case types.updateUser:
      return {
        ...state,
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
