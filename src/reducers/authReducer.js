import { types } from "../types/types";

const initialState = {
  activeUser: {},
  users: [],
  selectedUser: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        activeUser: action.payload,
        logged: true,
      };

    case types.addUser:
      return {
        ...state,
      };
    case types.deleteUser:
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
    case types.selectedUser:
      return {
        ...state,
        selectedUser: action.payload,
      };

    default:
      return state;
  }
};
