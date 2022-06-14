import * as React from "react";
import Head from "next/head";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

interface props {
  lang?: string;
  title?: string;
  description?: string;
  readonly children: React.ReactNode;
}

export const Layout = ({ lang, title, description, children }: props) => {
  return (
    <>
      <Head>
        <html lang={lang ? lang : `en`} />
        <title>{title ? title : "Maxenius Solutions"}</title>
        <meta
          name="description"
          content={description ? description : `Maxenius Solutions`}
        />
        <meta name="theme-color" content="#ff173d" />
        <meta name="msapplication-navbutton-color" content="#ff173d" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ff173d" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
