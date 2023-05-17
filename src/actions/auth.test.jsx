import { beforeEach, describe, expect, it, vitest } from "vitest";
import { startLogin } from "./auth";
import { types } from "../types/types";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Swal from "sweetalert2";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    logged: "false",
  },
};

let store = mockStore(initState);

Storage.prototype.setItem = vitest.fn();

describe("Tests in auth and users actions", () => {
  beforeEach(() => {
    store = mockStore(initState);
    vitest.clearAllMocks();
  });
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

  it("Correct login", async () => {
    await store.dispatch(startLogin("dmuniz", "123456"));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.login,
      payload: {
        user: expect.any(String),
      },
    });
    expect(localStorage.setItem).toHaveBeenCalledWith("token", expect.any(String));
    expect(localStorage.setItem).toHaveBeenCalledWith("token-init-date", expect.any(Number));
  });

  it("Incorrect login", async () => {
    await store.dispatch(startLogin("dmuniz", "asdasd456789"));
    let actions = store.getActions();

    expect(actions).toEqual([]);

    await store.dispatch(startLogin("test", "123456"));
    actions = store.getActions();

    expect(actions).toEqual([]);
  });
});
