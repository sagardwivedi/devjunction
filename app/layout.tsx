import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "react-hot-toast";

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
      <body className={`bg-black text-white antialiased`}>
        <main>{children}</main>
        <Toaster position="bottom-center" reverseOrder={true} />
      </body>
    </html>
  );
}
