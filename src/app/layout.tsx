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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://abraryeasir.dev",
  ),
  title: {
    default: "Abrar Yeasir | Full-Stack AI & Software Engineer",
    template: "%s | Abrar Yeasir",
  },
  description:
    "Editorial portfolio of Abrar Yeasir. Blending typographic craftsmanship with high-performance Next.js full-stack architecture, backend systems, and autonomous AI agents.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Abrar Yeasir | Full-Stack AI & Software Engineer",
    description:
      "Editorial portfolio of Abrar Yeasir. Blending typographic craftsmanship with high-performance Next.js full-stack architecture, backend systems, and autonomous AI agents.",
    url: "https://abraryeasir.dev",
    siteName: "Abrar Yeasir Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abrar Yeasir | Full-Stack AI & Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abrar Yeasir | Full-Stack AI & Software Engineer",
    description:
      "Editorial portfolio of Abrar Yeasir. Blending typographic craftsmanship with high-performance Next.js full-stack architecture, backend systems, and autonomous AI agents.",
    images: ["/og-image.png"],
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
      <body className="bg-alabaster text-[#1A1C20] min-h-screen flex flex-col font-sans selection:bg-[#E04D2D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
