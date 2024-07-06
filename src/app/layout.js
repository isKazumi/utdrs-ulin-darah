"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {loading ? <Loading /> : children}
      </body>
    </html>
  );
}
