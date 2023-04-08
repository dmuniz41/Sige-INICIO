import React from "react";
import { UserTopToolbar } from "./UserTopToolbar";
import { UsersTable } from "./UsersTable";

export const UserScreen = () => {
  const currentPath = "current path";

  return (
    <div className="section_wrapper">
      {/* Header de la pantalla de usuarios */}
      <div className="section_header">
        <h1>Listado de usuarios</h1>
        <div className="breadcrumb">
          <span>Inicio / {currentPath}</span>
        </div>
      </div>
      <div className="section_body">
        <div className="section_table">
          {/* Toolbar de la tabla de usuarios */}
          <UserTopToolbar />
          <div className="section_data_table">
            {/* Tabla de usuarios */}
            <UsersTable />
          </div>
        </div>
      </div>
    </div>
  );
};
