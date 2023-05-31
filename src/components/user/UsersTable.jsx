import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { DataTable } from "../generic/DataTable";
import { FaPlus, FaEdit, FaTrashAlt, FaFlag, FaRedo, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startDeleteUser, usersStartLoading } from "../../actions/auth";

export const UsersTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const { selectedUser } = useSelector((state) => state.auth);
  const { user } = selectedUser;

  const data = useMemo(() => users, [users]);

  useEffect(() => {
    if (Object.keys(selectedUser).length !== 0) {
      document.getElementById("delete_user_btn").disabled = false;
      document.getElementById("edit_user_btn").disabled = false;
      // document.getElementById("privileges_user_btn").disabled = false;
    } else {
      document.getElementById("delete_user_btn").disabled = true;
      document.getElementById("edit_user_btn").disabled = true;
      // document.getElementById("privileges_user_btn").disabled = true;
    }
  }, [selectedUser]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteUser(user));
    dispatch(usersStartLoading());
  };
  const handleRefresh = (e) => {
    e.preventDefault();
    dispatch(usersStartLoading());
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Usuario",
        accessor: "user",
        sortType: "basic",
      },
      {
        Header: "Nombre",
        accessor: "userName",
        sortType: "basic",
      },
      {
        Header: "Apellidos",
        accessor: "lastName",
        sortType: "basic",
      },
      {
        Header: "Privilegios",
        accessor: "privileges",
        sortType: "basic",
      },
      // {
      //   Header: "Estado",
      //   accessor: "state",
      //   sortType: "basic",
      // },
      {
        Header: "Área",
        accessor: "area",
        sortType: "basic",
      },
    ],
    []
  );

  return (
    <div className="section_table_wrapper">
      <div className="section_top_toolbar">
        <div className="top_toolbar_action">
          <button className="toolbar_btn">
            <Link to="/dashboard/user/add">
              <FaPlus />
            </Link>
          </button>
          <button id="edit_user_btn" className="toolbar_btn" disabled>
            <Link to="/dashboard/user/edit">
              <FaEdit />
            </Link>
          </button>
          <button id="delete_user_btn" className="toolbar_btn" onClick={handleDelete}>
            <Link to="/dashboard/user">
              <FaTrashAlt />
            </Link>
          </button>
          <button id="privileges_user_btn" className="toolbar_btn" disabled>
            <Link to="/dashboard/user">
              <FaFlag />
            </Link>
          </button>
          <button className="toolbar_btn" onClick={handleRefresh}>
            <Link to="/dashboard/user">
              <FaRedo />
            </Link>
          </button>
        </div>
        <div className="top_toolbar_search">
          <form onSubmit={handleSearch}>
            <input type="search" name="Buscar" placeholder="Buscar" />
            <button disabled>
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};
