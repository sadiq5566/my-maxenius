import Image from "next/image";
import React from "react";
import client from "../../public/assets/images/feedback.png";
import HalfRedStarSVG from "../../public/assets/svgs/HalfRedStarSVG";
import RatingStarSVG from "../../public/assets/svgs/RatingStarSVG";
import RightChevronBlackSvg from "../../public/assets/svgs/RightChevronBlackSvg";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";

export const Feedback = () => {
  return (
    <section className="w-full h-[765px] ">
      <div className="flex justify-between items-center pt-16 px-28">
        <div className="flex">
          <h1 className="font-poppins w-[457px] font-normal text-4xl leading-[48px] text-black">
            Maxenius Success Stories
          </h1>
          <div className="ml-4">
            <HalfRedStarSVG />
          </div>
        </div>
        <div className="flex justify-center items-center">
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

      <div className="w-full mx-auto flex px-5 mt-24 mb-20 flex-row items-center">
        <div className="w-1/3 flex items-center justify-center overflow-hidden">
          <Image
            src={client}
            alt="image of client"
            width="312px"
            height="308px"
            objectFit="contain"
          />
        </div>
        <div className="w-2/3 h-[308px] flex flex-col justify-between">
          <div className="flex justify-center pr-12">
            <p className="font-Lato font-medium text-[20px] leading-9 text-pColor text-justify w-[690px]">
              Usama has performed an excellent Job, went beyond and above my expectations,
              despite being on a very tight budget. He was very professional, responsive,
              helpful, and trustworthy though the project was time consuming as well as
              little bit complicated beyond what was expected. I will definitely be using
              in the future and will recommend for complex projects.
            </p>
          </div>
          <div className="flex flex-col pl-[76px]">
            <div className="flex justify-between w-[690px] items-center">
              <h2 className="font-poppins font-normal text-2xl leading-9 text-black not-italic">
                Lane M. Campbell
              </h2>
              <div className="flex ">
                {[...Array(5)].map((e, i) => (
                  <span key={i} className="ml-2">
                    <RatingStarSVG />
                  </span>
                ))}
              </div>
            </div>
            <p className="w-[679px] font-Lato font-medium text-lg leading-9 text-justify text-pColor">
              Bedrock Impact Group & Maxenius Advisor
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center">
        <div className="w-1/3 flex pl-44 items-center justify-center ">
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[46px] h-[8px] ml-2 rounded-[10px] bg-main"></div>
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[19px] h-[8px] ml-2 rounded-[10px] bg-greyClr"></div>
          <div className="w-[30px] h-[30px] ml-16">
            <RightChevronBlackSvg />
          </div>
        </div>
        <div className="w-2/3 px-28">
          <hr />
        </div>
      </div>
    </section>
  );
};
