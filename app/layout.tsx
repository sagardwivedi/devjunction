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
      <body className={`bg-gray-200 text-black antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
