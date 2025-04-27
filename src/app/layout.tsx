import type { Metadata } from "next";

import "./globals.css";
import "../styles/markdown.css";

export const metadata: Metadata = {
  title: "Supplier Risk AI Search Tool",
  description: "Supplier Risk AI Search Tool",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
