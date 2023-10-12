export type ColumnType<T> = {
  header: string;
  accessorKey: keyof T;
  size: number;
};

export type RowType = {
  id: string;
};

export type TableType<R> = {
  count: number;
  pageIndex: number;
  pageSize: number;
  columns: ColumnType<R>[];
  rows: R[];
};
