import React from "react";
import { Layout } from "../components/Layout";
import { Blog } from "../components/OurWork";

const OurWork = () => {
  return (
    <>
      <Layout
        headTitle="Take A Look At Our Work"
        subTitle="Here are some of our projects that we take pride in. Take a look around and you'll definitely find something fascinating in them"
        bannerImageClass="hidden sm:block"
        customHeight="h-[654px] sm:h-[510.65px]"
      >
        <Blog />
      </Layout>
    </>
  );
};

export default OurWork;
