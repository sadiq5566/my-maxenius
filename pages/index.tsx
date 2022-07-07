import type { NextPage } from "next";
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
      </Layout>
    </>
  );
};

export default Home;
