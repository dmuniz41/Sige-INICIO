import { describe, expect, it } from "vitest";
import { login, logout, usersLoaded, selectedUser, startLogin, startLogout } from "./auth";
import { types } from "../types/types";
import thunk from "redux-thunk";

import configureStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth: {
    logged: "false",
  },
});

describe("Tests in auth and users actions", () => {
  const user = {
    user: "dmuniz",
    password: "123456",
  };
  const users = [
    {
      user: "dmuniz",
      password: "123456",
    },
  ];
  it("should all actions be functional", async () => {
    const loginAction = login(user);
    const logoutAction = logout();
    const usersLoadedAction = usersLoaded(users);
    const selectedUserAction = selectedUser(user);

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        user,
      },
    });

    expect(logoutAction).toEqual({
      type: types.logout,
    });

    expect(usersLoadedAction).toEqual({
      type: types.usersLoaded,
      payload: users,
    });

    expect(selectedUserAction).toEqual({
      type: types.selectedUser,
      payload: user,
    });

    await store.dispatch(startLogin(user.user, user.password));

    await store.dispatch(startLogout());

    const storeState = store.getState();
    const actions = store.getActions();
    console.log(storeState);
    console.log(actions);
  });
});
