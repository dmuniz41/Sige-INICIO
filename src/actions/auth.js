import Swal from "sweetalert2";
import { fetchSinToken } from "../../helpers/fetch";
import { types } from "../types/types";

const login = (userName) => {
  return {
    type: types.login,
    payload: {
      userName,
    },
  };
};
export const logout = () => {
  return {
    type: types.logout,
  };
};

export const startLogin = (userName, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth", { userName, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          userName: userName,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
