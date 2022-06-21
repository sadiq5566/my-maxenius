import React from "react";
import { servicesData } from "../../data/Services";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";
export const Services = () => {
  return (
    <div className="w-full h-[1423px] md:h-[2000px] sm:h-auto pt-20 bg-serviceBg ">
      <section className="body-font">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col text-center sm:text-left sm:px-8 w-full mb-20">
            <h1 className="font-poppins font-normal text-4xl not-italic sm:text-8xl leading-[48px] text-black">
              Services We Offer
            </h1>
          </div>
          <div className="flex flex-wrap mx-4 md:mx-24    ">
            {servicesData.map((service) => {
              return (
                <div
                  className={`w-1/3 md:w-1/2 sm:w-full mt-4 sm:mt-2 flex sm:mb-20`}
                  key={`${service.id}`}
                >
                  <div
                    className={`h-[278px] w-[367px]  md:w-full flex flex-col justify-around  rounded-md py-8 px-10  ${
                      service.id == 2
                        ? "border-main bg-white border-b-4 r sm:h-auto shadow-service"
                        : "bg-serviceBg"
                    } `}
                  >
                    <div className="sm:h-[60px] sm:w-[60px] sm:mb-6">
                      {service.svg({})}
                    </div>
                    <div className="flex-grow mt-4 flex flex-col justify-evenly  ">
                      <h2 className="leading-9 text-black text-2xl font-normal font-poppins sm:text-5xl">
                        {service.title}
                      </h2>
                      <p className="font-Lato text-pColor font-medium sm:text-4xl sm:my-8  sm:tracking-widest sm:leading-[1.6] sm:h-[150px] text-xl leading-[30px] w-[270px] md:w-full md:mt-4 h-[120px] text-justify not-italic">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center items-center sm:my-12">
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
    </div>
  );
};
