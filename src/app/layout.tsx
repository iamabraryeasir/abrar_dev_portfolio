import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Abrar Yeasir | Senior Full-Stack Engineer & UI/UX Implementer",
  description:
    "Editorial portfolio of Abrar Yeasir. Blending typographic editorial craftsmanship with high-performance Next.js full-stack engineering.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="bg-[#F4F4F0] text-[#1A1C20] min-h-screen flex flex-col font-sans selection:bg-[#E04D2D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
