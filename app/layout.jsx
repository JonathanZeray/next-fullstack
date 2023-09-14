"use client";
import "@styles/globals.css";

import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import PreLoader from "@components/PreLoader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// export const metadata = {
//   title: "The Airpods Pro",
//   description: "Discover the new exciting Airpods Pro.",
// };

const RootLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 2500);
    })();
  }, []);
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="">
            <div className="" />
          </div>
          <main className="">
            <AnimatePresence mode="wait">{isLoading && <PreLoader />}</AnimatePresence>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
