import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Awesome Login forms!",
  description: "These are modern login forms that you can use in your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={GeistSans.style}>
        <main>{children}</main>
      </body>
    </html>
  );
}
