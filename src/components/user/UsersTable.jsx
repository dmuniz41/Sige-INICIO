import React from "react";
import { mockUsersData } from "../../mockData/mockData";
import { useMemo } from "react";
import { Table } from "../generic/Table";

export const UsersTable = () => {
  const data = useMemo(() => mockUsersData, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Usuario",
        accessor: "user",
      },
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Apellidos",
        accessor: "lastName",
      },
      {
        Header: "Privilegios",
        accessor: "privileges",
      },
      {
        Header: "Estado",
        accessor: "state",
      },
      {
        Header: "Área",
        accessor: "area",
      },
    ],
    []
  );

  return (
    <>
      <Table data={data} columns={columns} />
    </>
  );
};
