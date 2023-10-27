import type { Metadata } from "next";
import { Gloock, Manrope, Syne, Work_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevLinks",
};

const manrope = Manrope({ subsets: ["latin"], variable: "--manrope" });
const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--gloock",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background",
          manrope.variable,
          gloock.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
