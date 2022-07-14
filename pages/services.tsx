import React from "react";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
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
      >
        <Projects />
        <Services />
        <Carousel />
        <Feedback />
        <Footer />
      </Layout>
    </>
  );
};

export default OurWork;
