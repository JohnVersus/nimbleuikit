import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Social Image Generator",
  description:
    "Nimble UI Kit - Light weight UI kit to create stunning UI systems effortlessly!.",
  themeColor: "#ffffff",
  manifest: "/Icons/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Nimble UI kit - Website",
    url: "https://tools.johnversus.dev/github-social-image-generator",
    title: "Github Social Image Generator",
    description:
      "Nimble UI Kit - Light weight UI kit to create stunning UI systems effortlessly!.",
    images: [
      {
        url: "https://nimbleuikit-website.vercel.app/",
        width: 1920,
        height: 960,
        alt: "Github Social Image Generator",
      },
    ],
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Github Social Image Generator",
    description:
      "Nimble UI Kit - Light weight UI kit to create stunning UI systems effortlessly!.",
    images: {
      url: "https://nimbleuikit-website.vercel.app/",
      alt: "Github Social Image Generator",
    },
  },
  icons: {
    icon: [
      {
        url: "/Icons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/Icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],

    shortcut: ["/Icons/favicon.ico"],

    apple: [
      { url: "/Icons/apple-touch-icon.png" },
      {
        url: "/Icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
