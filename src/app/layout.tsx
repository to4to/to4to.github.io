import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshu | Software Engineer",
  description:
    "Software Engineer focused on building reliable systems, thoughtful tooling, and clean developer experience.",
  metadataBase: new URL("https://to4to.dev"),
  openGraph: {
    title: "Himanshu | Software Engineer",
    description:
      "Software Engineer focused on building reliable systems, thoughtful tooling, and clean developer experience.",
    url: "https://to4to.dev",
    siteName: "to4to",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Himanshu | Software Engineer",
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
