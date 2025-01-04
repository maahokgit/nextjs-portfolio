import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";

export const metadata: Metadata = {
  title: "Edward Ma, MStJ - A Web Developer",
  description: `Hi. I'm Edward, a web developer based in beautiful Nova Scotia, Canada.`,
  authors: [{ name: "Edward Ma, MStJ" }],
  themeColor: "#000000",
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
  viewport: "width=device-width, initial-scale=1",
  twitter: {
    card: "summary_large_image",
    site: "@maahokgit",
    creator: "@maahokgit",
    images: "/newSiteImage.png",
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
    images: "/newSiteImage.png",
    siteName: "Edward Ma, MStJ - A Web Developer",
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
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
      <body>
        <Navigation />
        {/* <main>{children}</main> */}
        <Main {...props} />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
