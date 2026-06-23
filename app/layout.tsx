import { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";

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
