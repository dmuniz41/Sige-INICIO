import React from "react";
import { UsersTable } from "./UsersTable";
import { SectionHeder } from "../generic/SectionHeder";

export const ListOfUsers = ({ currentPath }) => {
  return (
    <div>
      {/* Header de la pantalla de usuarios */}
      <SectionHeder title="Listado de Usuarios" currentPath="Usuarios" />
      <div className="section_body">
        <div className="section_data_table">
          {/* Tabla de usuarios */}
          <UsersTable />
        </div>
      </div>
    </div>
  );
};
