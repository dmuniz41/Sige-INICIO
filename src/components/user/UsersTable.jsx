import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { DataTable } from "../generic/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { usersStartLoading } from "../../actions/auth";

export const UsersTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);

  const data = useMemo(() => users, []);

  useEffect(() => {
    dispatch(usersStartLoading());
  }, [dispatch]);

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
    <>
      <DataTable data={data} columns={columns} />
    </>
  );
};
