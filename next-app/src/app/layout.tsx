import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App",
  description: "Sample e-commerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <div className="navbar p-4 bg-gray-800 text-white">
            <div className="flex items-center justify-around p-4bg-gray-800 text-white">
                <h1>SHOP.IN</h1>
                <ul className="inline-flex items-center gap-8">
                    <li>
                        <Link href={"/"} className="text-gray-500 hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="text-gray-500 hover:text-gray-300">About</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
