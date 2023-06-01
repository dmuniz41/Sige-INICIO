import Swal from "sweetalert2";
import { fetchConToken } from "../../helpers/fetch";
import { types } from "../types/types";
import { Toast } from "../../helpers/customAlert";

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
        dispatch(addUser(user, userName, lastName, privileges, password, area));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(err);
    }
  };
};
export const startUserUpdate = (user, userName, lastName, privileges, password, area, password2)=> {
  return async (dispatch)=>{
    try {
      const resp = await fetchConToken(`auth/`, { user, userName, lastName, privileges, password, area, password2 }, "PUT");
      const body = await resp.json();
      if (body.ok) {
        Toast.fire({
          icon: "success",
          title: "Usuario Actualizado",
        });
        dispatch(updateUser(user, userName, lastName, privileges, password, area, password2))
      } else {
        Swal.fire("Error", body.msg, "error");
      }
      
    } catch (error) {
      console.log(error);
    }
  }
}
export const startDeleteUser = (user) => {
  return async (dispatch) => {
    const resp = await fetchConToken(`auth/`, { user }, "DELETE");
    const body = await resp.json();
    try {
      if (body.ok) {
        dispatch(deleteUser(user))
        Toast.fire({
          icon: "success",
          title: "Usuario Eliminado",
        });
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
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

const addUser = (user, userName, lastName, privileges, password, area) => ({
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
const updateUser = (user, userName, lastName, privileges, password, area, password2) => ({
  type: types.updateUser,
  payload: {
  user,
  userName,
  lastName,
  privileges,
  password,
  area,
  password2
  }
});
const deleteUser = (user) => ({
  type: types.deleteUser,
  payload: {
  user
  }
});