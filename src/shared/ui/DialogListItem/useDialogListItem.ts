"use client";

import { useTracked } from "@/src/shared/lib/DialogProvider";

const useDialogListItem = (name: string) => {
  const [state] = useTracked();

  const handleClick = () => state[name]?.toggleOpen();

  return handleClick;
};

export default useDialogListItem;
