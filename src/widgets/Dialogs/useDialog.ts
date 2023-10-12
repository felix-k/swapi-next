"use client";

import { useEffect } from "react";
import { useToggle } from "usehooks-ts";
import { useUpdate } from "@/src/shared/lib/DialogProvider";

const useDialog = (name: string) => {
  const [open, toggleOpen] = useToggle(false);
  const setState = useUpdate();

  useEffect(() => {
    setState((prev: object) => ({ ...prev, [name]: { open, toggleOpen } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
};

export default useDialog;
