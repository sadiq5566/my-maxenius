import React, { useContext } from "react";
import StateContext from "../../Context/StateContext";
import MainArrowStraightSVG from "../../public/assets/svgs/MainArrowStraightSVG";
import { Swiper, SwiperSlide } from "swiper/react";
import { SingleBlogData } from "./SingleBlogData";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Carousel = () => {
  const { isLg, isTab, isMobile } = useContext(StateContext);

  return (
    <div className="w-full h-auto bg-main pb-16">
      <div className="p-24 md:px-8 flex justify-between">
        <div>
          <h3 className="font-poppins font-normal text-4xl lg:text-3xl md:text-[22px] md:leading-[30px] md:font-normal text-white">
            Case Studies
          </h3>
        </div>
        <div className="flex h-[54px] w-[178px] sm:h-[100px] sm:w-[250px] sm:rounded-full mb-3  bg-white  rounded-4xl justify-center items-center cursor-pointer md:hidden">
          <span className="text-main text-base leading-4 font-bold sm:text-2xl sm:font-bold font-poppins">
            View More
          </span>
          <div className="h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]  ml-2 flex justify-center items-center">
            <MainArrowStraightSVG
              {...(isLg
                ? { height: "24", width: "24" }
                : isTab
                ? { height: "16", width: "16" }
                : isMobile
                ? { height: "16", width: "16" }
                : { height: "24", width: "24" })}
            />
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="flex flex-col">
          <SingleBlogData item={1} />
          <SingleBlogData item={2} />
          <SingleBlogData item={3} />
        </div>
      ) : (
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
          <SwiperSlide>
            <SingleBlogData item={1} />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBlogData item={2} />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBlogData item={3} />
          </SwiperSlide>
        </Swiper>
      )}

      <div className="w-full md:flex justify-center hidden ">
        <div className="flex h-[54px] w-[178px] md:h-[34px] md:w-[128px]  sm:rounded-full mb-3 bg-white  rounded-4xl justify-center items-center cursor-pointer ">
          <span className="text-main text-base leading-4 font-bold md:text-xs md:font-semibold  font-poppins">
            View More
          </span>
          <div className="h-auto w-auto  ml-2 flex justify-center items-center">
            <MainArrowStraightSVG
              {...(isLg
                ? { height: "24", width: "24" }
                : isTab
                ? { height: "16", width: "16" }
                : isMobile
                ? { height: "16", width: "16" }
                : { height: "24", width: "24" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
