import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { types } from "../types/types";
import { Toast } from "../../helpers/customAlert";

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

export const addUser = (user, userName, lastName, privileges, password, area, password2) => {
  return async () => {
    const resp = await fetchConToken("auth/new", { user, userName, lastName, privileges, password, area, password2 }, "POST");
    const body = await resp.json();

    if (body.ok) {
      Toast.fire({
        icon: "success",
        title: "Usuario Creado",
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const updateUser = (user, userName, lastName, privileges, password, area, password2) => {
  return async () => {
    const resp = await fetchConToken(`auth/${user}`, { user, userName, lastName, privileges, password, area, password2 }, "PUT");
    const body = await resp.json();

    if (body.ok) {
      Toast.fire({
        icon: "success",
        title: "Usuario Actualizado",
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const usersStartLoading = () => {
  return async (dispatch) => {
    const resp = await fetchConToken(`auth/`, "GET");
    const body = await resp.json();

    dispatch(usersLoaded(body.listOfUsers));
  };
};

const usersLoaded = (users) => ({
  type: types.usersLoaded,
  payload: users,
});

export const selectedUser = (selectedUser) => ({
  type: types.selectedUser,
  payload: selectedUser,
});
