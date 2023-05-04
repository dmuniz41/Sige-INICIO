import React, { useState } from "react";
import { useSortBy, useTable, usePagination, useRowSelect } from "react-table";
import { ScopedCssBaseline, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md/";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaAngleLeft } from "react-icons/fa/";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectedUser } from "../../actions/auth";

const PAGE_SIZES = [10, 20, 30, 40];

// ! TODO: Implementar la funcion de buscar

export const DataTable = ({ data, columns }) => {
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
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize },
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
    <div style={{ overflow: "none" }}>
      <ScopedCssBaseline />
      <Table {...getTableProps()} sx={{ backgroundColor: "#fff", borderRadius: "5px" }}>
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
          {page.map((row, i) => {
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
      <div className="table_pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <FaAngleDoubleLeft />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FaAngleLeft />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <FaAngleRight />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <FaAngleDoubleRight />
        </button>
        <span>
          Página
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
        <span>
          | Ir a página :
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {PAGE_SIZES.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
