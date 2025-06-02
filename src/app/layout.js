"use client";

import { Aleo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { createContext } from "react";
import StoreProvider from "./StoreProvider";

const aleoSans = Aleo({
  subsets: ["latin"],
});

export const LanguageContext = createContext(null);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aleoSans.className}`}>
        {/* <LanguageContext.Provider value={{ language: ["Ka", "En", "Sp"] }}> */}
          <StoreProvider>
            <NavBar />
            {children}
          </StoreProvider>
        {/* </LanguageContext.Provider> */}
      </body>
    </html>
  );
}
