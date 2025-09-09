import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "DrCloud",
  description: "Your Path to Cloud Mastery",
  icons: {
    icon: "/assets/logo.jpg", // favicon
    shortcut: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
  openGraph: {
    title: "DrCloud",
    description: "Your Path to Cloud Mastery",
    url: "https://yourdomain.com", // replace with your actual domain
    siteName: "DrCloud",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 800,
        height: 600,
        alt: "DrCloud Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DrCloud",
    description: "Your Path to Cloud Mastery",
    images: ["/assets/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
