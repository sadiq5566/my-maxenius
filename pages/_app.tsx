import "../styles/globals.css";
import type { AppProps } from "next/app";
import StateContext from "../Context/StateContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLg, setIsLg] = useState(false);

  const [isTab, setIsTab] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  return (
    <StateContext.Provider
      value={{ isLg, setIsLg, isTab, setIsTab, isMobile, setIsMobile }}
    >
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}

export default MyApp;
