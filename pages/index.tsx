import type { NextPage } from "next";
import { Blog } from "../components/Blog";
import Clients from "../components/Clients/Clients";
import { Layout } from "../components/Layout";
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
      </Layout>
    </>
  );
};

export default Home;
