import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "waitlyst",
  description: "The easiest way to create and manage waitlists for your product.",
  openGraph: {
    url: 'https://waitlyst.vercel.app',
    title: 'waitlyst',
    description: 'The easiest way to create and manage waitlists for your product.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'waitlyst',
    description: 'The easiest way to create and manage waitlists for your product.',
    creator: '@emmathedev',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${instrument.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
