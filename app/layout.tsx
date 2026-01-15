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
  title: "Nanthavy Phommathep - Mobile App Developer | Flutter & Dart",
  description:
    "Mobile Application Developer specializing in Flutter & Dart. Building high-performance, scalable, and beautiful mobile applications with Clean Architecture and SOLID Principles.",
  keywords: [
    "Nanthavy",
    "Arick",
    "nanthavy",
    "Mobile Developer",
    "Flutter Developer",
    "Dart Developer",
    "App Development",
    "Clean Architecture",
    "SOLID Principles",
    "BLoC",
    "Riverpod",
    "GetX",
  ],
  authors: [{ name: "Nanthavy Phommathep", url: "https://yourwebsite.com" }],
  creator: "Nanthavy Phommathep",
  publisher: "Nanthavy Phommathep",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Nanthavy Phommathep - Mobile App Developer",
    description:
      "Mobile Application Developer specializing in Flutter & Dart. Building high-performance, scalable, and beautiful mobile applications.",
    siteName: "Nanthavy Phommathep Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nanthavy Phommathep - Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanthavy Phommathep - Mobile App Developer",
    description:
      "Mobile Application Developer specializing in Flutter & Dart",
    images: ["/og-image.png"],
    creator: "@nanthavy",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
