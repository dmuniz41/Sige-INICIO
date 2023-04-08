import React from "react";
import { useTable } from "react-table";
import { ScopedCssBaseline, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export const DataTable = ({ data, columns }) => {
  // Crear la instancia de la tabla
  const usersTable = useTable({ columns, data });

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
                <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
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
