import { describe, expect, it } from "vitest";
import { types } from "./types";

describe("Testing types", () => {
  it("types must be equals", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
      addUser: "[Auth] Add User",
      updateUser: "[Auth] Update User",
      deleteUser: "[Auth] Delete User",
      usersLoaded: "[Auth] Users Loaded",
      selectedUser: "[Auth] User Selected",
    });
  });
});
