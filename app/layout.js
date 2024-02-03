import Head from 'next/head';
import "./globals.css";
// import { Inter } from "next/font/google";
import Theming from "@/components/providers/Theme";
// import UiProvider from "@/components/providers/UiProvider";

import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// import { Inter } from "next/font/google";

// const font = Inter({
//   subsets: ["latin"],
//   weight: ["400", "600", "100"],
// });

export const metadata = {
  title: "James Archer - Portfolio",
  description: "My Portfolio Website",
  ogTitle: "James Archer - Portfolio",
  ogDescription: "Welcome to my portfolio site where I showcase my work & projects.",
  ogImage: "https://jamesarcher.io/1.png",
  canonical: "https://jamesarcher.io",
};


export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <link rel="canonical" href={metadata.canonical} />
        {/* Add any additional head elements here */}
      </Head>
      <html lang="en">
        <body>
          <Theming>
            <HeaderPage />
            {children}
            <Footer />
          </Theming>
        </body>
      </html>
    </>
  );
}