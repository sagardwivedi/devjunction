import type { Metadata } from 'next';

import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevLinks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 text-black antialiased`}>
        <main>{children}</main>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
