import { create } from "zustand";

export const usePaginationLoading = create<{
  loading: boolean;
}>((set) => ({
  loading: false,
}));
