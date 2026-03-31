import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://victorious-website.vercel.app";

export const metadata: Metadata = {
  icons: {
    icon: "/images/victorious_logo.jpeg",
    apple: "/images/victorious_logo.jpeg",
  },
  verification: {
    google: "oiQosaZZgnMvUbVo8Oz3psJOD1NW6z5HlZuzMJd_zYc",
  },
  title: "Victorious Badminton Academy | Badminton Training in Klang Valley",
  description:
    "Victorious Badminton Academy offers professional badminton coaching for kids and teens in Klang Valley, Malaysia. Training locations in Bukit Tinggi, Setia Alam & YTP Sports Arena Klang. Join 500+ students and certified coaches. Let's Strive Together!",
  keywords: [
    "badminton academy",
    "badminton training",
    "badminton coaching",
    "Victorious Badminton Academy",
    "badminton Klang",
    "badminton Bukit Tinggi",
    "badminton Setia Alam",
    "badminton classes for kids",
    "badminton lessons Malaysia",
    "Klang Valley badminton",
    "youth badminton training",
    "junior badminton coaching",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: SITE_URL,
    siteName: "Victorious Badminton Academy",
    title: "Victorious Badminton Academy | Badminton Training in Klang Valley",
    description:
      "Professional badminton coaching for kids and teens in Klang Valley. 500+ students, certified coaches, 3 locations. Let's Strive Together!",
    images: [
      {
        url: "/images/victorious_logo.jpeg",
        width: 512,
        height: 512,
        alt: "Victorious Badminton Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Victorious Badminton Academy | Badminton Training in Klang Valley",
    description:
      "Professional badminton coaching for kids and teens in Klang Valley. 500+ students, certified coaches, 3 locations.",
    images: ["/images/victorious_logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// JSON-LD structured data for Google rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Victorious Badminton Academy",
  description:
    "Professional badminton coaching for kids and teens in Klang Valley, Malaysia.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/victorious_logo.jpeg`,
  image: `${SITE_URL}/images/victorious_logo.jpeg`,
  telephone: "+60123253812",
  sport: "Badminton",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Klang",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 3.0319,
    longitude: 101.4433,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/victoriousbadmintonacademy",
    "https://www.instagram.com/victorious_badminton_academy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
