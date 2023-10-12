import { create } from "zustand";

export const useSearchLoading = create<{
  loading: boolean;
}>((set) => ({
  loading: false,
}));
