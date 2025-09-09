import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Cloud",
  description: "LMS Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`antialiased scroll-smooth`}>{children}</body>
    </html>
  );
}
