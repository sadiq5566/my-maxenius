import React from "react";
import { Carousel } from "../components/Carousel";
import { Feedback } from "../components/Feedback";
import { Layout } from "../components/Layout";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";

const OurWork = () => {
  return (
    <>
      <Layout
        headTitle="Your Business Needs Our Software Solutions"
        subTitle="We provide you end to end software development and consultancy services resulting in extraordinary digital experiences."
        bannerImageClass="hidden sm:block"
        customHeight="h-[654px] md:h-[515.65px] sm:h-[640.24px]"
      >
        <Projects />
        <Services />
        <Carousel />
        <Feedback />
      </Layout>
    </>
  );
};

export default OurWork;
