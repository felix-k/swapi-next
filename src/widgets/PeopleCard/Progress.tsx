"use client";

import { DebouncedProgress } from "@/src/shared/ui";
import { useSearchLoading } from "@/src/shared/ui/SearchBar";
import { usePaginationLoading } from "@/src/shared/ui/TableView";

const Progress = () => {
  const { loading: loadingPagination } = usePaginationLoading();
  const { loading: loadingSearch } = useSearchLoading();

  const loading = loadingPagination || loadingSearch;

  return <DebouncedProgress loading={loading} />;
};

export default Progress;
