"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TablePagination as MuiTablePagination } from "@mui/material";
import { PaginationActions, usePaginationLoading } from ".";
import { useDebounce } from "usehooks-ts";

type TablePaginationProps = {
  count: number;
  pageIndex: number;
  pageSize: number;
};

const TablePagination = (props: TablePaginationProps) => {
  const { count, pageIndex, pageSize } = props;
  const [isPending, startTransition] = useTransition();
  const [rowsCount, setRowsCount] = useState(count);
  const [page, setPage] = useState(pageIndex);
  const debouncedPage = useDebounce(page, 500);
  const refChange = useRef(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const handlePageChange = (_: any, page: number) => {
    refChange.current = true;
    setPage(page);
  };

  useEffect(() => {
    setPage(pageIndex);
    setRowsCount(count);
  }, [pageIndex, count]);

  useEffect(() => {
    if (!refChange.current) return;

    debouncedPage === 0
      ? params.delete("page")
      : params.set("page", String(debouncedPage));

    startTransition(() => {
      router.push(pathname + "?" + params.toString(), { scroll: false });
    });

    usePaginationLoading.setState({ loading: true });

    refChange.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPage]);

  useEffect(() => {
    const { loading } = usePaginationLoading.getState();

    if (loading && !isPending) {
      usePaginationLoading.setState({ loading: false });
    }
  }, [isPending]);

  return (
    <>
      <MuiTablePagination
        component="div"
        page={page}
        count={rowsCount}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[-1]}
        onPageChange={handlePageChange}
        ActionsComponent={PaginationActions}
      />
    </>
  );
};

export default TablePagination;
