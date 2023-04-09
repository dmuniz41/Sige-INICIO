import React from "react";

import { ListOfUsers } from "./ListOfUsers";
import { Routes, Route } from "react-router-dom";
import { AddUser } from "./AddUser";
import { EditUser } from "./Edituser";

export const UserScreen = () => {
  // ! TODO: Añadir path para el breadcrumb
  const currentPath = "current path";

  return (
    <div className="section_wrapper">
      <Routes>
        <Route path="/" element={<ListOfUsers currentPath={currentPath} />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit" element={<EditUser />} />
        <Route path="*" element={<ListOfUsers currentPath={currentPath} />} />
      </Routes>
    </div>
  );
};
