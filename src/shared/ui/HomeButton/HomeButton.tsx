"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { SxProps } from "@mui/system";

const HomeButton = ({ sx, path }: { sx: SxProps; path: string }) => {
  const router = useRouter();

  return (
    <Button sx={sx} onClick={() => router.push(path)}>
      Home
    </Button>
  );
};

export default HomeButton;
