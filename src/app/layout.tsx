import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bulwark Risk Partners - Executive Risk Advisory",
  description: "Identify the 3–5 risks that move your cash & margin. Get a board-ready plan in 10 days. Operational risk advisory for $20M–$300M revenue businesses.",
  keywords: ["risk management", "financial forecasting", "operational risk", "stress testing", "risk advisory", "business risk", "executive risk management", "cash flow protection", "vendor risk", "supply chain risk"],
  authors: [{ name: "Austin Margiela", url: "https://linkedin.com/in/austinory" }],
  creator: "Bulwark Risk Partners",
  publisher: "Bulwark Risk Partners",
  openGraph: {
    title: "Bulwark Risk Partners - Executive Risk Advisory",
    description: "Identify the 3–5 risks that move your cash & margin. Get a board-ready plan in 10 days. Operational risk advisory for $20M–$300M revenue businesses.",
    type: "website",
    locale: "en_US",
    url: "https://bulwarkrisk.com",
    siteName: "Bulwark Risk Partners",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bulwark Risk Partners - Executive Risk Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulwark Risk Partners - Executive Risk Advisory",
    description: "Identify the 3–5 risks that move your cash & margin. Get a board-ready plan in 10 days.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bulwarkrisk.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* LinkedIn Insight Tag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bulwark Risk Partners",
              "description": "Executive risk advisory services for operational risk management and financial forecasting",
              "url": "https://bulwarkrisk.com",
              "logo": "https://bulwarkrisk.com/hero.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "business",
                "email": "austin@bulwarkrisk.com"
              },
              "founder": {
                "@type": "Person",
                "name": "Austin Margiela",
                "url": "https://linkedin.com/in/austinory"
              },
              "sameAs": [
                "https://linkedin.com/in/austinory"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Executive Risk Diagnostic",
              "description": "10-day risk assessment including heatmap analysis, stress testing, and action planning",
              "brand": {
                "@type": "Brand",
                "name": "Bulwark Risk Partners"
              },
              "offers": {
                "@type": "Offer",
                "price": "3000",
                "priceCurrency": "USD",
                "description": "10-Day Executive Risk Diagnostic - $3,000 (100% credited if you start a plan within 30 days)"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
