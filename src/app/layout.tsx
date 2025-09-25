import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bulwark Risk Partners",
  description: "We map exposures, run stress tests, and send a monthly action plan that protects cash and margin.",
  keywords: ["risk management", "financial forecasting", "operational risk", "stress testing", "risk advisory", "business risk", "executive risk management"],
  authors: [{ name: "Bulwark Risk Partners" }],
  openGraph: {
    title: "Bulwark Risk Partners",
    description: "We map exposures, run stress tests, and send a monthly action plan that protects cash and margin.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulwark Risk Partners",
    description: "We map exposures, run stress tests, and send a monthly action plan that protects cash and margin.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
