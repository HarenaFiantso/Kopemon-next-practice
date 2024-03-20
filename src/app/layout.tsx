import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/fonts/Poppins-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/Poppins-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Poppins-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Poppins-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Poppins-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: '../../public/fonts/Poppins-Black.ttf',
      weight: '900',
    },
  ],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Kopémon - Fiantso Harena",
  description: "Next TypeScript practice using PokeAPI",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <html lang='en' className={`${poppins.variable} font-sans`}>
      <body>
      <div className="sticky top-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full h-1"/>
      {children}
      </body>
      </html>
  );
}

export default RootLayout;
