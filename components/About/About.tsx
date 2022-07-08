import React, { FC } from "react";
import PersonalSettings from "../svg/personal-settings";
import Consulting from "../svg/consulting";
import SocialStrategy from "../svg/social-strategy";
import OnlineCalender from "../svg/online-calender";
import OurAim from "../svg/our-aim";
import { ImageTextSection } from "./components";

const About: FC = () => {
  return (
    <>
      <div className="w-full h-[2349.1px] sm:px-5 lg:px-[115px] py-[128px] ">
        <ImageTextSection
          heading="Clients Satisfaction"
          para="A properly developed website should ultimately deliver absolute brand words. It will not deceive its users and helpful in getting maximum impact of cutomers. Providing trendy design is a way to attract your users and develop their interest. Changing followers into your business clients is not an easy task, for this we will provide you with the attention-seeking matrix designs, content and quick responses to gain their trust. Your website’s tempting design can become a cosmic reason for your business success. We work with a strong aim at how much our client is happy with our services. It helps to improve our productivity in future work. And this intention will never make us ran out of new ideas."
          align="right"
          image={<PersonalSettings />}
        />
        <ImageTextSection
          mainStyle="mt-[140px]"
          heading="Free Counseling"
          para="We will make an adequate and compelling plan which gain the customer’s Interest. We collaborate with brands and agencies to create memorable experiences. Think of us as more of a creative partner than a resource. We have a shared perspective on how we can work together to achieve your goals."
          align="left"
          image={<Consulting />}
        />
        <ImageTextSection
          mainStyle="mt-[140px]"
          heading="Fine Strategy Maker"
          para="We are integrating web elements in a strategical way to grab clients’ speculations. Our team will create a winning plan of action to establish your goals. We will align your goals with exceptional marketing strategy. We have a tremendous accomplished team for building up development plans for your product and website to make it top-ranked. As advertising is the elemental part of the E-commerce business, so we do not take any risk on quality and its worth."
          align="right"
          image={<SocialStrategy />}
        />
        <ImageTextSection
          mainStyle="mt-[140px]"
          heading="Milestones Calendar"
          para="We will provide a complete plan of action that you must know when we are going to achieve our first milestone and so on until the completion of project."
          align="left"
          image={<OnlineCalender />}
        />
      </div>
      <div className="w-full h-[538px] bg-red-gradient">
        <OurAim />
        <div className="lg:p-[115px] md:p-[10px]">
          <h1 className="text-4xl inline-block font-['Poppins'] font-normal text-white	">
            Our Aim
          </h1>
          <p className="text-xl text-[#FFFFFF] text-justify mt-[35px] font-['Lato'] font-medium text-white">
            A properly developed website should ultimately deliver absolute brand words.
            It will not deceive its users and helpful in getting maximum impact of
            cutomers. Providing trendy design is a way to attract your users and develop
            their interest. Changing followers into your business clients is not an easy
            task, for this we will provide you with the attention-seeking matrix designs,
            content and quick responses to gain their trust. Your website’s tempting
            design can become a cosmic reason for your business success. We work with a
            strong aim at how much our client is happy with our services. It helps to
            improve our productivity in future work. And this intention will never make us
            ran out of new ideas.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
