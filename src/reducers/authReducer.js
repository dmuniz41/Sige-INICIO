import { types } from "../types/types";

export const authReducer = (state = { logged: false }, action) => {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.userName,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
