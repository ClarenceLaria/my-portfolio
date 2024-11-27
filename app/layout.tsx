import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Laria - Software Developer",
  description: "software developer",
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
        // className={inter.className}
      >
        <div className="w-screen h-screen overflow-hidden">
          <div className="h-full lg:mx-40 md:mx-20 sm:mx-10 m-5 sm:my-5 my-3">
            <div className="w-full h-10 font-mono">
              <NavBar />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
