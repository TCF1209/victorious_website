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

export const metadata: Metadata = {
  title: "Victorious Badminton Academy",
  description: "Professional badminton training academy - Let's Strive Together. Training locations in Bukit Tinggi, Setia Alam, and YTP Sports Arena.",
  openGraph: {
    title: "Victorious Badminton Academy",
    description: "Professional badminton training academy - Let's Strive Together. Training locations in Bukit Tinggi, Setia Alam, and YTP Sports Arena.",
    images: [
      {
        url: '/images/victorious_logo.jpeg',
        width: 512,
        height: 512,
        alt: 'Victorious Badminton Academy Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
