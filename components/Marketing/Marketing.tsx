import React from "react";
import { marketingData } from "../../data/Marketing";
import MarketingServicesSvg from "../../public/assets/svgs/MarketingServicesSvg";
export const Marketing = () => {
  return (
    <section className="w-full h-[944px] sm:h-auto bg-serviceBg">
      <div className="container px-16 py-24 mx-auto ">
        <div className="flex flex-col text-center sm:text-left w-full mb-20">
          <div className="flex">
            <h1 className="text-4xl sm:text-7xl sm:font-semibold sm:tracking-widest font-poppins font-normal leading-[48px] text-black not-italic">
              Get rid of the Marketing Services section
              <span className="ml-10 sm:h-auto ">
                <MarketingServicesSvg />
              </span>
            </h1>
          </div>
          <p className=" font-Lato w-[1117px] sm:w-full sm:text-5xl sm:tracking-wider sm:mt-4 sm:leading-[1.6] text-justify text-xl font-medium text-pColor leading-9 not-italic mt-5">
            While our core business has always been software development, we also help our
            clients scale up their marketing efforts when they need professional marketing
            assistance.
          </p>
        </div>
        <div className="flex flex-wrap justify-around sm:w-full sm:h-auto sm:px-8">
          {marketingData.map((data) => (
            <div
              className={`pl-3 pr-8 pt-8 h-[242px] w-[559px] sm:w-full sm:h-auto sm:my-6 ${
                data.id == 2
                  ? "border-main bg-white border-b-4 r shadow-service"
                  : "bg-serviceBg"
              }
               ${data.id > 2 ? "mt-12" : "mt-6"}`}
              key={`${data.id}`}
            >
              <div className=" pt-2 px-14 flex flex-col justify-around h-full ">
                <div className="mb-4 sm:h-[50] sm:w-[50] sm:my-6">{data.svg({})}</div>
                <h2 className="sm:text-5xl  sm:font-semibold sm:my-2 text-2xl font-poppins font-normal leading-9 text-black not-italic">
                  {data.title}
                </h2>

                <p className="sm:text-4xl sm:my-3  sm:tracking-widest sm:leading-[1.6] font-Lato w-[431px] sm:w-full text-justify text-xl font-medium text-pColor leading-[30px] not-italic pb-8">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
