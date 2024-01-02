import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import header settings
import HeaderNav from "@/components/ui/HeaderNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "danilppzz",
  description: "Portfolio of danilppzz!",
  openGraph: {
    title: "danilppzz",
    images: "/icon.png",
    description: "Portfolio of danilppzz!",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:color" content="#ffffff"></meta>
        <link rel="icon" href="/icon.png" type="image/png" sizes="128x128" />
      </head>
      <body className={inter.className}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
