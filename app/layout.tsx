import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "DevLinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-100 text-black antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
