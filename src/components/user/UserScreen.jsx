import { useEffect } from "react";
import { ListOfUsers } from "./ListOfUsers";
import { Routes, Route } from "react-router-dom";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";
import { usersStartLoading } from "../../actions/auth.js";
import { useDispatch } from "react-redux";

export const UserScreen = () => {
  const dispatch = useDispatch();
  const currentPath = "Usuarios";

  useEffect(() => {
    dispatch(usersStartLoading());
  }, [dispatch]);

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
