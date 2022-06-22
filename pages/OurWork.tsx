import React from "react";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { Blog } from "../components/OurWork";

const ourwork = () => {
  return (
    <>
      <Header
        title="Take A Look At Our Work"
        subTitle="Here are some of our projects that we take pride in. Take a look around and you'll definitely find something fascinating in them"
      />
      <Blog />
      <Footer />
    </>
  );
};

export default ourwork;
