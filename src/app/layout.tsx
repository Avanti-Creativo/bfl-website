import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Built For Life Financial Agency | Wealth Strategies for Individuals",
  description: "Get your COMPLIMENTARY Financial Needs Analysis and discover exactly where you're leaving money on the table. Tax-optimized wealth-building strategies for hard-working individuals.",
  keywords: "wealth planning, tax optimization, wealth building, insurance planning, wealth strategist",
  openGraph: {
    title: "Built For Life Financial Agency",
    description: "Finally: A Clear Financial Strategy That Protects You, Optimizes Your Taxes, and Builds Lasting Wealth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8CPTNZ5');`}
        </Script>
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8CPTNZ5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
