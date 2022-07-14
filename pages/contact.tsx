import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import Contact from "../components/Contact";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};
export default ContactPage;
