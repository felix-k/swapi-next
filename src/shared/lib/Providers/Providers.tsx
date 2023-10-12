import { ReactNode } from "react";
import { Compose, ThemeProvider, DialogProvider } from "@/src/shared/lib";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Compose components={[ThemeProvider, DialogProvider]}>{children}</Compose>
  );
};

export default Providers;
