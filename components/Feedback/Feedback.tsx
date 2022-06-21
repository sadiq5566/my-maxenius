import Image from "next/image";
import React from "react";
import client from "../../public/assets/images/feedback.png";
import HalfRedStarSVG from "../../public/assets/svgs/HalfRedStarSVG";
import RatingStarSVG from "../../public/assets/svgs/RatingStarSVG";
import RightChevronBlackSvg from "../../public/assets/svgs/RightChevronBlackSvg";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";

export const Feedback = () => {
  return (
    <section className="w-full h-[765px] sm:h-auto ">
      <div className="flex sm:flex-col justify-between items-center pt-16 px-28">
        <div className="flex sm:text-left sm:w-full">
          <h1 className="inline sm:text-8xl sm:font-semibold sm:tracking-widest font-poppins :w-full font-normal text-4xl leading-[48px] text-black">
            Maxenius Success Stories
            <span className="ml-7 sm:h-auto">
              <HalfRedStarSVG />
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center sm:hidden">
          <div className="flex h-[54px] w-[230px] mb-3 bg-gradient-to-r from-gradient1 to-gradient2  text-white rounded-4xl justify-center items-center cursor-pointer">
            <span className="text-white text-base leading-4 font-bold font-poppins">
              View All Stories
            </span>
            <div className="h-[24px] w-[24px] ml-2">
              <StraightArrowWhiteSvg />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 px-28">
        <hr />
      </div>

      <div className="w-full mx-auto flex px-5 mt-24 mb-20 flex-row sm:flex-col items-center">
        <div className="w-1/3 sm:w-full flex items-center justify-center overflow-hidden">
          <Image
            src={client}
            alt="image of client"
            width="312px"
            height="308px"
            objectFit="contain"
          />
        </div>
        <div className="w-2/3 sm:w-full sm:h-auto sm:mt-24 h-[308px] flex flex-col justify-between">
          <div className="flex justify-center pr-12">
            <p className="font-Lato font-medium text-[20px] sm:text-5xl sm:tracking-wide sm:mt-4 sm:leading-[1.6] leading-9 text-pColor text-justify w-[690px] sm:w-full sm:px-24">
              Usama has performed an excellent Job, went beyond and above my expectations,
              despite being on a very tight budget. He was very professional, responsive,
              helpful, and trustworthy though the project was time consuming as well as
              little bit complicated beyond what was expected. I will definitely be using
              in the future and will recommend for complex projects.
            </p>
          </div>
          <div className="flex flex-col pl-[76px] sm:pl-0 sm:mt-16">
            <div className="flex sm:flex-col justify-between w-[690px] sm:w-full items-center">
              <h2 className="sm:text-6xl sm:font-semibold sm:tracking-wide font-poppins font-normal text-2xl leading-9 text-black not-italic sm:order-2">
                Lane M. Campbell
              </h2>
              <div className="flex sm:my-16">
                {[...Array(5)].map((e, i) => (
                  <span key={i} className="ml-2 sm:ml-6 ">
                    <RatingStarSVG />
                  </span>
                ))}
              </div>
            </div>
            <p className="w-[679px] sm:w-full sm:text-center sm:text-5xl sm:mt-6 font-Lato font-medium text-lg leading-9 text-justify text-pColor">
              Bedrock Impact Group & Maxenius Advisor
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex sm:flex-col items-center">
        <div className="w-1/3 flex pl-44 items-center justify-center sm:my-4">
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[46px] h-[8px] ml-2 rounded-[10px] bg-main"></div>
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[30px] h-[30px] ml-16">
            <RightChevronBlackSvg />
          </div>
        </div>
        <div className="w-2/3 px-28 sm:my-4">
          <hr />
        </div>
      </div>

      <div className="w-full flex justify-center items-center sm:mt-6 invisible sm:visible">
        <div className="flex h-[54px] w-[230px] sm:h-[100px] sm:w-[350px] sm:rounded-full mb-3  bg-gradient-to-r from-gradient1 to-gradient2  text-white rounded-4xl justify-center items-center cursor-pointer">
          <span className="text-white text-base leading-4 font-bold sm:text-2xl sm:font-bold font-poppins">
            View All Services
          </span>
          <div className="h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]  ml-2 flex justify-center items-center">
            <StraightArrowWhiteSvg />
          </div>
        </div>
      </div>
    </section>
  );
};
