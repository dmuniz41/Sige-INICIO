import { types } from "../types/types";

const initialState = {
  users: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
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
    case types.usersLoaded:
      return {
        ...state,
        users: [...action.payload],
      };

    default:
      return state;
  }
};
