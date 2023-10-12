import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
} from "@mui/material";

import { TableViewRow, TablePagination, RowType, TableType } from ".";

const TableView = <R extends RowType>({ table }: { table: TableType<R> }) => {
  return (
    <>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size={"medium"}>
          <TableHead>
            <TableRow>
              {table.columns.map((column, index) => {
                return (
                  <TableCell
                    key={index}
                    sx={{ width: column.size }}
                    align={index ? "right" : "left"}
                  >
                    <div>{column.header}</div>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {table.rows.map((row) => {
              return (
                <TableViewRow key={row.id} row={row} columns={table.columns} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={table.count}
        pageIndex={table.pageIndex}
        pageSize={table.pageSize}
      />
    </>
  );
};

export default TableView;
