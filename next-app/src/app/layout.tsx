import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import Link from "next/link";
import {Input} from "@headlessui/react";
import {UserCircleIcon} from "@heroicons/react/16/solid";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Shop.IN",
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
            <div className="flex items-center justify-between p-4bg-gray-800 text-white">
                <Link href={"/"}>
                    <p className="text-2xl font-bold">SHOP.IN</p>
                </Link>
                <ul className="inline-flex items-center gap-8">
                    <li>
                        <Input placeholder={"Search..."} className="shadow-sm shadow-gray-100 rounded-2xl px-2 py-1"/>
                    </li>
                    <li>
                        <Link href={"/shop"} className="text-gray-300 hover:text-gray-100">Shop</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className="text-gray-300 hover:text-gray-100">Contact</Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-gray-300 hover:text-gray-100">
                            <UserCircleIcon className="w-8"/>
                        </Link>
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
