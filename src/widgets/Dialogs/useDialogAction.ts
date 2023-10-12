"use client";

import { usePersonStore } from "@/src/entities/person";
import { PersonType } from "@/src/shared/types";

const useDialogAction = () => {
  const handleAction = (person: PersonType) => {
    usePersonStore.setState({ person });
  };

  return handleAction;
};

export default useDialogAction;
