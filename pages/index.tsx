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
      <Layout isExpText={true} customHeight="h-[784px] md:h-[556.68px] sm:h-[576.68px]">
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
