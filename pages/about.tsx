import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import About from "../components/About";

const AboutPage: NextPage = () => {
  return (
    <Layout
      headTitle="Why Choose Us?"
      subTitle="By choosing us denotes you are finally paying attention to your reputation and having someone who has a great experience and capacity for it."
      btnText="Contact Now"
      customHeight="h-[654px] md:h-[520.24px] sm:h-[520.24px]"
      bannerImageClass="hidden sm:block"
    >
      <About />
    </Layout>
  );
};
export default AboutPage;
