"use client";

import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";
import { RowType, ColumnType } from ".";

type TableViewRowProps<R> = {
  row: R;
  columns: ColumnType<R>[];
};

const TableViewRow = <R extends RowType>({
  row,
  columns,
}: TableViewRowProps<R>) => {
  const router = useRouter();

  return (
    <TableRow
      hover
      tabIndex={-1}
      sx={{ cursor: "pointer" }}
      onClick={() => router.push(`/people/${row.id}`)}
    >
      {columns.map((column, index) => {
        return (
          <TableCell
            key={`${row.id}-${index}`}
            align={index ? "right" : "left"}
          >
            {String(row[column.accessorKey])}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableViewRow;
