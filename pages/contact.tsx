import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import Contact from "../components/Contact";

const ContactPage: NextPage = () => {
  return (
    <Layout
      headTitle="Let’s get started!"
      subTitle="."
      isButton={false}
      customHeight="h-[788px] sm:h-[734.95px]"
      bannerImageClass="hidden sm:block"
      isContact={true}
    >
      <Contact />
    </Layout>
  );
};
export default ContactPage;
