import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshu Kumar Singh | Software Engineer",
  description:
    "Software Engineer focused on building reliable systems, thoughtful tooling, and clean developer experience.",
  metadataBase: new URL("https://to4to.dev"),
  alternates: {
    canonical: "https://to4to.dev/",
  },
  keywords: [
    "Himanshu Kumar Singh",
    "to4to",
    "Software Engineer",
    "Backend",
    "DevOps",
    "Cloud",
    "Web3",
  ],
  authors: [{ name: "Himanshu Kumar Singh" }],
  creator: "to4to",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Himanshu Kumar Singh | Software Engineer",
    description:
      "Software Engineer focused on building reliable systems, thoughtful tooling, and clean developer experience.",
    url: "https://to4to.dev",
    siteName: "to4to",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Kumar Singh | Software Engineer",
    description:
      "Software Engineer focused on building reliable systems, thoughtful tooling, and clean developer experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-dvh`}>{children}</body>
    </html>
  );
}
