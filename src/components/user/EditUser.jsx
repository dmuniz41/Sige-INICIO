import React, { useEffect, useState } from "react";
import { SectionHeder } from "../generic/SectionHeder";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startUserUpdate, usersStartLoading } from "../../actions/auth";
import Swal from "sweetalert2";

export const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedUser } = useSelector((state) => state.auth);

  const [listOfPrivileges, setListOfPrivileges] = useState(selectedUser.privileges);

  const [formValues, handleInputChange] = useForm({
    user     : selectedUser.user,
    userName : selectedUser.userName,
    lastName : selectedUser.lastName,
    password : "",
    password2: "",
    area     : selectedUser.area,
  });

  let { user, userName, lastName, privilege, password, area, password2 } = formValues;

  useEffect(() => {
    if (listOfPrivileges.includes(privilege) || !privilege) {
      return;
    }
    setListOfPrivileges((privileges) => [...privileges, privilege]);
  }, [privilege]);

  const HandleUpdate = (e) => {
    e.preventDefault();

    if (password !== password2) {
      Swal.fire("Error", "Las contraseñas deben ser iguales", "error");
      return;
    }
    dispatch(startUserUpdate(user, userName, lastName, listOfPrivileges, password, area, password2));
    dispatch(usersStartLoading());
    navigate(-1);
  };

  const handleRemoveSelectedItem = (e) => {
    const selectedPrivilege = e.target.innerText;

    const currentPrivileges = listOfPrivileges.filter((privilege) => privilege != selectedPrivilege);
    setListOfPrivileges(currentPrivileges);
  };

  return (
    <>
      <SectionHeder title="Editar Usuario" currentPath="Usuarios" />
      <div className="form_wrapper">
        <form className="form" onSubmit={HandleUpdate}>
          <div className="form_input">
            <label htmlFor="user">Usuario *</label>
            <input 
              type="text" 
              id="user" 
              name="user" 
              value={user} 
              onChange={handleInputChange} 
              required 
              disabled />
          </div>
          <div className="form_input">
            <label htmlFor="username">Nombre *</label>
            <input 
              type="text" 
              id="username" 
              name="userName" 
              value={userName} 
              onChange={handleInputChange} 
              required 
              disabled />
          </div>
          <div className="form_input">
            <label htmlFor="lastName">Apellidos *</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={lastName} 
              onChange={handleInputChange} 
              required 
              disabled />
          </div>
          <div className="form_input">
            <label htmlFor="password">Contraseña *</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={handleInputChange} 
              required />
          </div>
          <div className="form_input">
            <label htmlFor="password">Confirmar Contraseña *</label>
            <input 
              type="password" 
              id="password2" 
              name="password2" 
              value={password2} 
              onChange={handleInputChange} 
              required />
          </div>
          <div className="form_input">
            <label htmlFor="privileges">Privilegios *</label>
            <div className="selected_input_item">
              {listOfPrivileges
                ? listOfPrivileges.map((privilege) => {
                    return (
                      <div id="privilege" key={privilege} onClick={handleRemoveSelectedItem}>
                        {privilege}
                      </div>
                    );
                  })
                : ""}
            </div>
            <select 
              id="privilege" 
              className="form_select" 
              name="privilege" 
              value={privilege} 
              onChange={handleInputChange} 
              required>
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
              Editar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
