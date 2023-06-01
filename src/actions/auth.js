import Swal from "sweetalert2";

import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (user, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth", { user, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(login(user));
    } else {
      Swal.fire("Error", body.msg, "Error al autenticar usuario");
    }
  };
};
export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
    dispatch(logout());
  };
};
export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("auth/renew", "GET");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(login(body.user));
    } else {
      dispatch(checkingFinish());
    }
  };
};
const login = (user) => {
  return {
    type: types.login,
    payload: {
      user,
    },
  };
};
const logout = () => {
  return {
    type: types.logout,
  };
};
const checkingFinish = () => ({
  type: types.checkingFinish,
});
