import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "DrCloud - Innovate,Inspire, Impact",
  description:
    "DrCloud is dedicated to empowering individuals with the skills and knowledge needed to excel in the cloud computing and DevOps landscape. Our mission is to provide high-quality, accessible education that bridges the gap between theory and practice, enabling our students to achieve their career goals.",
  icons: {
    icon: "/favicon.icon", // favicon
    shortcut: "/assets/logo.jpg",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "DrCloud - Innovate,Inspire, Impact",
    description:
      "Empowering professionals with cutting-edge cloud and DevOps skills for the digital future.",
    url: "https://drcloud.co.in", // replace with your actual domain
    siteName: "DrCloud",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "DrCloud Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DrCloud - Innovate,Inspire, Impact",
    description:
      "Empowering professionals with cutting-edge cloud and DevOps skills for the digital future.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
