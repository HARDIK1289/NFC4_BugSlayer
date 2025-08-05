import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleTranslate from "./components/GoogleTranslate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KrishiMitra",
  description: "A webApp built only for our heros - farmers to ease their problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTranslate/>
        {children}
      </body>
    </html>
  );
}
