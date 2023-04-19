import React, { useState } from "react";
import { useSortBy, useTable, usePagination, useRowSelect } from "react-table";
import { ScopedCssBaseline, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { MdArrowUpward } from "react-icons/md/";
import { MdArrowDownward } from "react-icons/md/";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectedUser } from "../../actions/auth";

// ! TODO: Eliminar overflow de la tabla haciendo la paginacion
// ! TODO: Implementar la funcion de buscar

export const DataTable = ({ data, columns }) => {
  console.log("render");
  const dispatch = useDispatch();

  // Crear la instancia de la tabla
  const usersTable = useTable({ columns, data }, useSortBy, usePagination, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: "selection",
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row, toggleAllRowsSelected, toggleRowSelected }) => {
          const currentState = row.getToggleRowSelectedProps();
          return (
            <div>
              <IndeterminateCheckbox
                {...row.getToggleRowSelectedProps()}
                {...currentState}
                onClick={() => {
                  toggleAllRowsSelected(false);
                  toggleRowSelected(row.id, !currentState.checked);
                }}
              />
            </div>
          );
        },
      },
      ...columns,
    ]);
  });

  // Obtiene las propiedades de la tabla
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    rows,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = usersTable;

  const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <label className="checkbox_container">
        <input type="checkbox" ref={resolvedRef} {...rest} />
        <span className="checkmark"></span>
      </label>
    );
  });

  const selectedRow = selectedFlatRows.map((row) => row.original);
  const user = selectedRow[0];
  // Guardando usuario seleccionado en estado
  useEffect(() => {
    if (user) {
      dispatch(selectedUser(user));
    } else {
      dispatch(selectedUser({}));
    }
  }, [user]);

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
                      {column.isSorted ? column.isSortedDesc ? <MdArrowDownward /> : <MdArrowUpward /> : ""}
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
