import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// import header settings
import HeaderNav from "@/components/HeaderNav";

const font = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "danilppzz",
  description: "Portfolio of danilppzz!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="theme-color" content="#ffffff"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="danilppzz"></meta>
        <meta property="og:description" content="Build awesome this with danilppzz!"></meta>
        <meta property="og:color" content="#ffffff"></meta>
        <meta property="og:image" content="https://danilppzz.dev/icon.png"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="danilppzz"></meta>
        <meta property="twitter:description" content="Build awesome this with danilppzz!"></meta>
        <meta property="twitter:color" content="#ffffff"></meta>
        <meta property="twitter:image" content="https://danilppzz.dev/icon.png"></meta>

        <link rel="icon" href="/icon.png" type="image/png" sizes="128x128" />
        <link rel="manifest" href="/manifest.json"></link>
      </head>
      <body className={font.className}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
