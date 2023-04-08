import React from "react";
import { useSortBy, useTable } from "react-table";
import { ScopedCssBaseline, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { MdArrowUpward } from "react-icons/md/";
import { MdArrowDownward } from "react-icons/md/";

export const DataTable = ({ data, columns }) => {
  // Crear la instancia de la tabla
  const usersTable = useTable({ columns, data }, useSortBy);

  // Obtiene las propiedades de la tabla
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = usersTable;
  return (
    <>
      <ScopedCssBaseline />
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {column.render("Header")}
                    <div style={{ marginTop: "5px", fontSize: "medium" }}>
                      {" "}
                      {column.isSorted ? column.isSortedDesc ? <MdArrowDownward /> : <MdArrowUpward /> : ""}{" "}
                    </div>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
