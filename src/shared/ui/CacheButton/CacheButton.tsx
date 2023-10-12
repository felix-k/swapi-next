"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { toggleServerCache } from "./actions";

const CacheButton = ({ enabled }: { enabled: boolean }) => {
  const [loading, setLoading] = useState(false);
  const [enabledCache, setEnabledCache] = useState(enabled);

  const handleClick = () => {
    setLoading(true);
    (async function () {
      setEnabledCache(await toggleServerCache());
      setLoading(false);
    })();
  };

  return (
    <Button suppressHydrationWarning disabled={loading} onClick={handleClick}>
      {enabledCache ? "Disable Server Cache" : "Enable Server Cache"}
    </Button>
  );
};

export default CacheButton;
