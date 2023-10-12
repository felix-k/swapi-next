import { create } from "zustand";
import { PersonType } from "@/src/shared/types";

type PersonStoreType = { person: PersonType | undefined };

export const usePersonStore = create<PersonStoreType>((set) => ({
  person: undefined,
}));
