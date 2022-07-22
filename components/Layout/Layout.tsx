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
  btnText?: string;
  isButton?: boolean;
  customHeight?: string;
  isExpText?: boolean;
  bannerImageClass?: string;
  isContact?: boolean;
}

export const Layout = ({
  title,
  description,
  children,
  headTitle,
  subTitle,
  btnText,
  isButton,
  customHeight,
  isExpText,
  bannerImageClass,
  isContact
}: props) => {
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

        <Header
          title={headTitle}
          subTitle={subTitle}
          btnText={btnText}
          isButton={isButton}
          customHeight={customHeight}
          isExpText={isExpText}
          bannerImageClass={bannerImageClass}
          isContact={isContact}
        />

        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
