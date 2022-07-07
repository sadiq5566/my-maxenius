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
        <meta name="description" content={description ? description : ``} />
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#ff173d" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#ff173d" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#ff173d" />
      </Head>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
