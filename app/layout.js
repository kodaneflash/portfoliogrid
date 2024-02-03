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
  description: "My portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <body className={`${font.className} `}> */}
        <Theming>
          <HeaderPage />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
