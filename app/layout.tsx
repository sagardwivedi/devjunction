import type { Metadata } from "next";
import { Jua, Nunito } from "next/font/google";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "DevLinks",
};

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });
const jua = Jua({ subsets: ["latin"], weight: ["400"], variable: "--jua" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}${jua.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
