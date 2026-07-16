import { Metadata } from "next";
import { Figtree } from 'next/font/google';
import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "",
};

const figtree: NextFont = Figtree({ subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={figtree.className}
    >
      <body>{children}</body>
    </html>
  );
}
