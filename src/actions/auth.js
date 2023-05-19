import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { types } from "../types/types";
import { Toast } from "../../helpers/customAlert";

export const login = (user) => {
  return {
    type: types.login,
    payload: {
      user,
    },
  };
};
export const logout = () => {
  return {
    type: types.logout,
  };
};

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

const checkingFinish = () => ({
  type: types.checkingFinish,
});

export const startAddUser = (user, userName, lastName, privileges, password, area, password2) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("auth/new", { user, userName, lastName, privileges, password, area, password2 }, "POST");
      const body = await resp.json();

      if (body.ok) {
        Toast.fire({
          icon: "success",
          title: "Usuario Creado",
        });
        dispatch(addUser(user, userName, lastName, privileges, password, area, password2));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(err);
    }
  };
};

const addUser = (user, userName, lastName, privileges, password, area, password2) => ({
  type: types.addUser,
  payload: {
    user,
    userName,
    lastName,
    privileges,
    password,
    area,
  },
});

export const updateUser = (user, userName, lastName, privileges, password, area, password2) => {
  return async () => {
    const resp = await fetchConToken(`auth/`, { user, userName, lastName, privileges, password, area, password2 }, "PUT");
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
export const deleteUser = (user) => {
  return async () => {
    const resp = await fetchConToken(`auth/`, { user }, "DELETE");
    const body = await resp.json();

    if (body.ok) {
      Toast.fire({
        icon: "success",
        title: "Usuario Eliminado",
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

export const usersLoaded = (users) => ({
  type: types.usersLoaded,
  payload: users,
});

export const selectedUser = (selectedUser) => ({
  type: types.selectedUser,
  payload: selectedUser,
});
