import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConditionalFloatingSymbols from "@/components/ConditionalFloatingSymbols";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Mehraj Ahmad Lone - Academic Portfolio",
  description: "Assistant Professor, Department of Mathematics, NIT Srinagar. Research in Differential Geometry, Submanifold Theory, and Optimization.",
  openGraph: {
    title: "Dr. Mehraj Ahmad Lone - Academic Portfolio",
    description: "Assistant Professor, Department of Mathematics, NIT Srinagar",
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
      <body
        className={`${ebGaramond.variable} ${inter.variable} antialiased relative`}
      >
        <ConditionalFloatingSymbols />
        <Navbar />
        <div className="relative z-10 min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
