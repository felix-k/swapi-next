import { create } from "zustand";

export const useParamsStore = create<{
  search: string | undefined;
  pageIndex: number;
}>((set) => ({
  search: undefined,
  pageIndex: 0,
}));
