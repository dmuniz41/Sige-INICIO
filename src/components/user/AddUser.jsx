import React from "react";
import { SectionHeder } from "../generic/SectionHeder";

export const AddUser = () => {
  const HandleSubmit = (e) => {
    return e.preventDefault();
  };

  return (
    <>
      <SectionHeder title="Crear Usuario" currentPath="Usuarios" />
      <div className="form_wrapper">
        <form className="form" onSubmit={HandleSubmit}>
          <div className="form_input">
            <label htmlFor="user">Usuario *</label>
            <input type="text" id="user" />
          </div>
          <div className="form_input">
            <label htmlFor="username">Nombre *</label>
            <input type="text" id="username" />
          </div>
          <div className="form_input">
            <label htmlFor="lastName">Apellidos *</label>
            <input type="text" id="lastName" />
          </div>
          <div className="form_input">
            <label htmlFor="privileges">Privilegios *</label>
            <input type="text" id="privileges" />
          </div>
          <div className="form_input">
            <label htmlFor="state">Estado *</label>
            <input type="text" id="state" />
          </div>
          <div className="form_input">
            <label htmlFor="area">Área *</label>
            <input type="text" id="area" />
          </div>
          <div className="form_action">
            <button type="submit" className="form_btn_cancel">
              Cancelar
            </button>
            <button type="submit" className="form_btn_save">
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
