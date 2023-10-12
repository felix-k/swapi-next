"use client";

import { useMemo } from "react";
import { grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useLocalStorage } from "usehooks-ts";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const useCustomTheme = () => {
  const [mode, setMode] = useLocalStorage<PaletteMode>("mode", "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark", newMode === "dark");
        setMode(newMode);
      },
    }),
    [mode, setMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" && { background: { default: grey[100] } }),
        },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
      }),
    [mode]
  );

  return { theme, colorMode };
};

export default useCustomTheme;
