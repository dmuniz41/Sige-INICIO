import React from "react";
import { mockUsersData } from "../../mockData/mockData";
import { useMemo } from "react";
import { DataTable } from "../generic/DataTable";

export const UsersTable = () => {
  const data = useMemo(() => mockUsersData, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Usuario",
        accessor: "user",
        sortType: "basic",
      },
      {
        Header: "Nombre",
        accessor: "name",
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
      {
        Header: "Estado",
        accessor: "state",
        sortType: "basic",
      },
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
