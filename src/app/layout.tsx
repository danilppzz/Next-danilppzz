import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import header settings
import HeaderNav from "@/components/ui/HeaderNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "danilppzz",
  description: "Mode by danilppzz with next.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <HeaderNav/>
        {children}
      </body>
    </html>
  );
}
