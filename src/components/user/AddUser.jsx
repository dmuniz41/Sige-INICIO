import React from "react";
import { SectionHeder } from "../generic/SectionHeder";
import { useForm } from "../../hooks/useForm";

export const AddUser = () => {
  const [formValues, handleInputChange] = useForm({
    user: "",
    userName: "",
    lastName: "",
    privileges: "",
    state: "",
    area: "",
  });

  const { user, userName, lastName, privileges, state, area } = formValues;

  const HandleSubmit = (e) => {
    console.log(
      "🚀 ~ file: AddUser.jsx:16 ~ AddUser ~ user, userName, lastName, privileges, state, area:",
      user,
      userName,
      lastName,
      privileges,
      state,
      area
    );
    return e.preventDefault();
  };

  return (
    <>
      <SectionHeder title="Crear Usuario" currentPath="Usuarios" />
      <div className="form_wrapper">
        <form className="form" onSubmit={HandleSubmit}>
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
            <label htmlFor="privileges">Privilegios *</label>
            <input type="text" id="privileges" name="privileges" value={privileges} onChange={handleInputChange} required />
          </div>
          <div className="form_input">
            <label htmlFor="state">Estado *</label>
            <input type="text" id="state" name="state" value={state} onChange={handleInputChange} required />
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
            <button className="form_btn_cancel">Cancelar</button>
            <button type="submit" className="form_btn_save">
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
