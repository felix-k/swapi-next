"use client";

import { useContext } from "react";
import { Button, useTheme } from "@mui/material";
import { ThemeContext } from "@/src/shared/lib/ThemeProvider";

const ColorModeButton = () => {
  const theme = useTheme();
  const context = useContext(ThemeContext);

  return (
    <Button suppressHydrationWarning onClick={context.toggleColorMode}>
      {theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}
    </Button>
  );
};

export default ColorModeButton;
