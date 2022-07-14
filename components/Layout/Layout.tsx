import * as React from "react";
import Head from "next/head";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

interface props {
  title?: string;
  description?: string;
  readonly children: React.ReactNode;
  headTitle?: string;
  subTitle?: string;
}

export const Layout = ({ title, description, children, headTitle, subTitle }: props) => {
  return (
    <>
      <div>
        <Head>
          <title>{title ? title : "Maxenius Solutions"}</title>
          <meta
            name="description"
            content={description ? description : `Maxenius Solutions`}
          />
        </Head>

        <Header title={headTitle} subTitle={subTitle} />

        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
