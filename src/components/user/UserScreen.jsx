import React from "react";

import { ListOfUsers } from "./ListOfUsers";
import { Routes, Route } from "react-router-dom";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";

export const UserScreen = () => {
  const currentPath = "Usuarios";

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
