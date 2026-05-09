import type { Metadata } from "next";
import "./globals.css";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'none'",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-src 'none'",
  "img-src 'self' data:",
  "manifest-src 'self'",
  "object-src 'none'",
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline'"
    : "script-src 'self'",
  process.env.NODE_ENV === "development"
    ? "style-src 'self' 'unsafe-inline'"
    : "style-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

export const dynamic = "error";

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
  referrer: "no-referrer",
  other: {
    "color-scheme": "dark",
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
