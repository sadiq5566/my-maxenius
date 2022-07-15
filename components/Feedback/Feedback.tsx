import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../../Button";
import StateContext from "../../Context/StateContext";
import client from "../../public/assets/images/feedback.png";
import HalfRedStarSVG from "../../public/assets/svgs/HalfRedStarSVG";
import RatingStarSVG from "../../public/assets/svgs/RatingStarSVG";
import RightChevronBlackSvg from "../../public/assets/svgs/RightChevronBlackSvg";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";

export const Feedback = () => {
  const { isLg, isTab, isMobile } = useContext(StateContext);
  return (
    <section className="w-full h-[765px] sm:h-auto ">
      <div className="flex sm:flex-col justify-between items-center pt-16 px-28 md:px-14 sm:pt-8 sm:px-6">
        <div className="flex w-3/4 sm:text-left md:w-full ">
          <h1 className="inline md:text-[22px] md:font-normal md:leading[30px] font-poppins md:w-full font-normal text-4xl leading-[48px] text-black sm:text-xl sm:leading-[30px] sm:font-normal">
            Maxenius Success Stories
            <span className="ml-7  md:h-[30px] md:w-[30px]">
              <HalfRedStarSVG
                {...(isLg
                  ? { height: "48", width: "48" }
                  : isTab
                  ? { height: "30", width: "30" }
                  : isMobile
                  ? { height: "30", width: "30" }
                  : { height: "48", width: "48" })}
              />
            </span>
          </h1>
        </div>

        <Button
          className="flex h-[54px] w-[230px]  md:w-[150px] md:h-[34px] sm:rounded-full mb-3 bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer md:hidden"
          preSVG={false}
          svg={() =>
            StraightArrowWhiteSvg({
              ...(isLg
                ? { height: "24", width: "40" }
                : isTab
                ? { height: "16", width: "16" }
                : isMobile
                ? { height: "16", width: "16" }
                : { height: "24", width: "40" })
            })
          }
        >
          View All Stories
        </Button>
      </div>
      <div className="pt-10 px-28 sm:px-4">
        <hr />
      </div>

      <div className="w-full mx-auto flex px-5 md:px-8 sm:px-4 mt-24 mb-20 sm:mb-4 flex-row sm:flex-col items-center">
        <div className="w-1/3 sm:w-full flex items-center justify-center overflow-hidden">
          <Image
            src={client}
            alt="image of client"
            width="312px"
            height="308px"
            objectFit="contain"
          />
        </div>
        <div className="w-2/3 sm:w-full lg:pl-[40px] sm:pl-0 pr-20 md:pr-0  sm:h-auto sm:mt-8 h-auto md:h-auto flex flex-col justify-between">
          <div className="flex ">
            <p className="font-Lato font-medium text-[20px] md:text-xs md:font-medium  md:leading-5 leading-9 lg:leading-6 text-pColor text-justify w-auto sm:w-full  ">
              Usama has performed an excellent Job, went beyond and above my expectations,
              despite being on a very tight budget. He was very professional, responsive,
              helpful, and trustworthy though the project was time consuming as well as
              little bit complicated beyond what was expected. I will definitely be using
              in the future and will recommend for complex projects.
            </p>
          </div>
          <div className="w-auto lg:w-auto flex flex-col mt-12 md:mt-2 sm:pl-0 sm:mt-0">
            <div className="flex sm:flex-col justify-between w-auto sm:w-full items-center  ">
              <h2 className="md:text-base sm:font-semibold md:leading-6 font-poppins font-normal text-2xl leading-9 text-black not-italic sm:order-2">
                Lane M. Campbell
              </h2>
              <div className="flex sm:my-6 ">
                {[...Array(5)].map((e, i) => (
                  <span key={i} className="ml-2 sm:ml-6 ">
                    <RatingStarSVG />
                  </span>
                ))}
              </div>
            </div>
            <p className="w-[679px] md:w-full sm:text-center md:text-xs md:font-medium md:leading-5 sm:mt-2 font-Lato font-medium text-lg leading-9 text-justify text-pColor md:mt-2">
              Bedrock Impact Group & Maxenius Advisor
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex sm:flex-col items-center">
        <div className="w-1/3 sm:w-full flex pl-32 md:pl-14 sm:pl-0 items-center justify-center sm:my-0 sm:mb-4">
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[46px] h-[8px] ml-2 rounded-[10px] bg-main"></div>
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[30px] h-[30px] ml-16 md:ml-8 sm:ml-4">
            <RightChevronBlackSvg />
          </div>
        </div>
        <div className="w-2/3 px-28 sm:my-2 sm:px-4 sm:w-full">
          <hr />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          className="flex h-[54px] w-[230px]  md:w-[150px] md:h-[34px] sm:rounded-full mb-3 bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer invisible md:visible md:mt-6"
          preSVG={false}
          svg={() =>
            StraightArrowWhiteSvg({
              ...(isLg
                ? { height: "24", width: "40" }
                : isTab
                ? { height: "16", width: "16" }
                : isMobile
                ? { height: "16", width: "16" }
                : { height: "24", width: "40" })
            })
          }
        >
          View All Stories
        </Button>
      </div>
    </section>
  );
};
