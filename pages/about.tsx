import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import About from "../components/About";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};
export default AboutPage;
