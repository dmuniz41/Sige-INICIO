import React from "react";
import { UsersTable } from "./UsersTable";
import { UserTopToolbar } from "./UserTopToolbar";
import { SectionHeder } from "../generic/SectionHeder";

export const ListOfUsers = ({ currentPath }) => {
  return (
    <div className="section_wrapper">
      {/* Header de la pantalla de usuarios */}
      <SectionHeder title="Listado de Usuarios" currentPath={currentPath} />
      <div className="section_body">
        <div className="section_table_wrapper">
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
