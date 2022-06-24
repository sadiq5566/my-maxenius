import type { NextPage } from "next";
import { Blog } from "../components/Blog";
import Clients from "../components/Clients/Clients";
import { Feedback } from "../components/Feedback";
import { Layout } from "../components/Layout";
import { Marketing } from "../components/Marketing";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Projects />
        <Clients />
        <Services />
        <Blog />
        <Marketing />
        <Feedback />
      </Layout>
    </>
  );
};

export default Home;
