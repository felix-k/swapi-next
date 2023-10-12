import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Providers = dynamic(
  () => import("@/src/shared/lib/Providers/Providers"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "SWAPI Test App",
  description: "StarWars Heroes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col items-center p-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
