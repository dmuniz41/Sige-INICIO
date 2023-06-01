import { types } from "../types/types";

const initialState = {
  users: [],
  selectedUser: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
