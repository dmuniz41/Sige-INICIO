import React from "react";
import { SectionHeder } from "../generic/SectionHeder";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addUser, usersStartLoading } from "../../actions/auth";

// ! TODO: Arreglar los selcets para que sean multiples y vayan mostrando las opciones seleccionadas en tiempo real

export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    user: "dmuniz",
    userName: "Daniel",
    lastName: "Muniz",
    privileges: "ROLE_ADMIN",
    password: "123456",
    password2: "123456",
    area: "INICIO",
  });

  const { user, userName, lastName, privileges, password, area, password2 } = formValues;

  const HandleRegister = (e) => {
    e.preventDefault();

    if (password !== password2) {
      Swal.fire("Error", "Las contraseñas deben ser iguales", "error");
      return;
    }

    dispatch(addUser(user, userName, lastName, privileges, password, area, password2));
    dispatch(usersStartLoading());
    navigate(-1);
  };

  return (
    <>
      <SectionHeder title="Crear Usuario" currentPath="Usuarios" />
      <div className="form_wrapper">
        <form className="form" onSubmit={HandleRegister}>
          <div className="form_input">
            <label htmlFor="user">Usuario *</label>
            <input type="text" id="user" name="user" value={user} onChange={handleInputChange} required />
          </div>
          <div className="form_input">
            <label htmlFor="username">Nombre *</label>
            <input type="text" id="username" name="userName" value={userName} onChange={handleInputChange} required />
          </div>
          <div className="form_input">
            <label htmlFor="lastName">Apellidos *</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleInputChange} required />
          </div>
          <div className="form_input">
            <label htmlFor="password">Contraseña *</label>
            <input type="password" id="password" name="password" value={password} onChange={handleInputChange} required />
          </div>
          <div className="form_input">
            <label htmlFor="password">Confirmar Contraseña *</label>
            <input type="password" id="password2" name="password2" value={password2} onChange={handleInputChange} required />
          </div>
          <div className="form_input">
            <label htmlFor="privileges">Privilegios *</label>
            <select id="privileges" className="form_select" name="privileges" value={privileges} onChange={handleInputChange} required>
              <option value="ROLE_ADMIN">ADMIN</option>
              <option value="ROLE_COMMERCIAL ">COMMERCIAL</option>
              <option value="ROLE_USER">USER</option>
              <option value="ROLE_HR">HR</option>
              <option value="ROLE_PROYECT">PROYECT</option>
              <option value="ROLE_WAREHOUSE">WAREHOUSE</option>
              <option value="ROLE_OFFICE">OFFICE</option>
            </select>
          </div>

          <div className="form_input">
            <label htmlFor="area">Área *</label>
            <select id="area" className="form_select" name="area" value={area} onChange={handleInputChange} required>
              <option value="INICIO">INICIO</option>
              <option value="Himbiprint 1">Himbiprint 1</option>
              <option value="Himbiprint 2">Himbiprint 2</option>
            </select>
          </div>
          <div className="form_action">
            <div
              className="form_btn_cancel"
              onClick={() => {
                dispatch(usersStartLoading());
                navigate(-1);
              }}
            >
              <span>Cancelar</span>
            </div>
            <button type="submit" className="form_btn_save">
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
