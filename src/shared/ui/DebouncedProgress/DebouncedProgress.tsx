"use client";

import { Box, LinearProgress } from "@mui/material";
import { useDebounce } from "usehooks-ts";

const DebouncedProgress = ({ loading }: { loading: boolean }) => {
  const debouncedVisible = useDebounce(loading);

  if (!debouncedVisible || !loading) return null;

  return (
    <Box sx={{ position: "relative" }}>
      <LinearProgress sx={{ position: "absolute", width: 1 }} />
    </Box>
  );
};

export default DebouncedProgress;
