import type { Metadata } from "next";
import "./globals.css";

const isDevelopment = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "child-src 'none'",
  "connect-src 'none'",
  "font-src 'self' data:",
  "form-action 'none'",
  "frame-src 'none'",
  "img-src 'self' data:",
  "manifest-src 'self'",
  "media-src 'none'",
  "navigate-to 'self' https://github.com https://www.linkedin.com https://x.com https://instagram.com https://threads.net https://bsky.app https://mail.google.com mailto:",
  "object-src 'none'",
  "prefetch-src 'self'",
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline'"
    : "script-src 'self'",
  process.env.NODE_ENV === "development"
    ? "style-src 'self' 'unsafe-inline'"
    : "style-src 'self'",
  "worker-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

export const dynamic = "error";

export const metadata: Metadata = {
  applicationName: "to4to.dev",
  title: "Himanshu Kumar Singh | Software Developer",
  description:
    "Himanshu Kumar Singh is a software developer focused on reliable products, clear interfaces, maintainable systems, and developer tooling.",
  metadataBase: new URL("https://to4to.dev"),
  alternates: {
    canonical: "https://to4to.dev/",
  },
  keywords: [
    "Himanshu Kumar Singh",
    "to4to",
    "Software Developer",
    "Software Engineer",
    "Developer",
    "Frontend Developer",
    "Web Developer",
    "Developer Tooling",
    "Reliable Software",
    "Programming",
    "Software",
  ],
  authors: [{ name: "Himanshu Kumar Singh" }],
  creator: "to4to",
  publisher: "to4to",
  category: "technology",
  classification: "Personal portfolio",
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
    title: "Himanshu Kumar Singh | Software Developer",
    description:
      "Personal website of Himanshu Kumar Singh, a software developer focused on reliable products, clear interfaces, and maintainable systems.",
    url: "https://to4to.dev",
    siteName: "to4to",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Himanshu Kumar Singh | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Kumar Singh | Software Developer",
    description:
      "Software developer focused on reliable products, clear interfaces, and maintainable systems.",
    creator: "@im_to4to",
    images: ["/twitter-image"],
  },
  referrer: "no-referrer",
  other: {
    "color-scheme": "light",
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlClassName = isDevelopment
    ? "h-full antialiased hydrated"
    : "h-full antialiased";

  return (
    <html lang="en" className={htmlClassName} suppressHydrationWarning>
      <head>
        {isDevelopment ? null : (
          <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
        )}
      </head>
      <body className="min-h-dvh">
        <a
          href="#content"
          className="sr-only rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
