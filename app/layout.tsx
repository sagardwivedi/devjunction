import type { Metadata } from "next";
import { Syne, Work_Sans } from "next/font/google";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "DevLinks",
};

const work_sans = Work_Sans({ subsets: ["latin"], variable: "--work_sans" });
const syne = Syne({ subsets: ["latin"], variable: "--syne" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${work_sans.variable}${syne.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
