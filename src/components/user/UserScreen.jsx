import React from "react";

export const UserScreen = () => {
  const currentPath = "current path";
  return (
    <div className="section_header">
      <h1>Listado de usuarios</h1>
      <div className="breadcrumb">
        <span>Inicio / {currentPath}</span>
      </div>
    </div>
  );
};
