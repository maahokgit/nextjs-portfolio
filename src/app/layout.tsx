import type { Metadata, Viewport } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Edward Ma, MStJ - A Web Developer",
  description: `Hi. I'm Edward, a web developer based in beautiful Nova Scotia, Canada.`,
  authors: [{ name: "Edward Ma, MStJ" }],
  icons: [
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  alternates: { canonical: "https://www.edwardma.ca/" },
  twitter: {
    card: "summary_large_image",
    site: "@maahokgit",
    creator: "@maahokgit",
    images: "https://www.edwardma.ca/newSiteImage.png",
    description:
      "Hi. I'm Edward, a web developer based in beautiful Nova Scotia, Canada.",
    title: "Edward Ma, MStJ - A Web Developer",
  },
  openGraph: {
    type: "website",
    url: "https://www.edwardma.ca/",
    title: "Edward Ma, MStJ - A Web Developer",
    description:
      "Hi. I'm Edward, a web developer based in beautiful Nova Scotia, Canada.",
    images: "https://www.edwardma.ca/newSiteImage.png",
    siteName: "Edward Ma, MStJ - A Web Developer",
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "width=device-width",
  initialScale: 1,
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: IRootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qjg3agw.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
