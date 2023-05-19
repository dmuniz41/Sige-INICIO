import { types } from "../types/types";

const initialState = {
  users: [],
  activeUser: {},
  selectedUser: {},
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
