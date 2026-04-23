import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Great_Vibes,
  Inter,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import { BRAND_HASHTAG, BRAND_LOGO_ALT, BRAND_LOGO_SRC } from "@/lib/brand";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anukritiandanmol.in"),
  title: "Anukriti Weds Anmol · A Royal Celebration of Love",
  description:
    `Join us for the timeless union of Anukriti and Anmol — a cinematic celebration across Haldwani and Gadarpur, Uttarakhand. Sangeet, Barat, and an unforgettable love story. ${BRAND_HASHTAG}`,
  keywords: [
    "Anukriti weds Anmol",
    BRAND_HASHTAG,
    "TheAnuMolLife",
    "Indian wedding",
    "Sangeet",
    "Barat",
    "Haldwani",
    "Gadarpur",
    "Uttarakhand wedding",
    "luxury wedding invitation",
  ],
  openGraph: {
    title: "Anukriti Weds Anmol",
    description:
      `A once-in-a-lifetime royal celebration. You are cordially invited. ${BRAND_HASHTAG}`,
    type: "website",
    images: [
      {
        url: BRAND_LOGO_SRC,
        width: 1183,
        height: 1329,
        alt: BRAND_LOGO_ALT,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0807",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${inter.variable} ${tiro.variable}`}
    >
      <body className="bg-matte text-ivory antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
