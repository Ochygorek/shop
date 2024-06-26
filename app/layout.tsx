import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const bluntFont = localFont({
  src: '../font/Fontspring-DEMO-blunt-semicon.otf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head> */}
      <body className={bluntFont.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}