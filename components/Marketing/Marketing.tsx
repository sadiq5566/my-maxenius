import React, { useContext } from "react";
import StateContext from "../../Context/StateContext";
import { marketingData } from "../../data/Marketing";
import MarketingServicesSvg from "../../public/assets/svgs/MarketingServicesSvg";
export const Marketing = () => {
  const { isLg, isTab, isMobile } = useContext(StateContext);
  return (
    <section className="w-full h-auto md:h-auto  bg-serviceBg">
      <div className="container px-28 py-24 md:px-8 sm:px-6 sm:py-8  mx-auto ">
        <div className="flex flex-col text-center sm:text-left w-full mb-20 md:mb-8 sm:mb-2">
          <div className="flex">
            <h1 className="text-4xl font-poppins font-normal leading-[48px] text-black not-italic md:text-[22px] md:font-normal md:leading-[30px] sm:text-[22px] sm:leading-[30px] sm:font-normal">
              Get rid of the Marketing Services section
              <span className="ml-4 sm:h-auto ">
                <MarketingServicesSvg
                  {...(isLg
                    ? { height: "44", width: "44" }
                    : isTab
                    ? { height: "36", width: "36" }
                    : isMobile
                    ? { height: "36", width: "36" }
                    : { height: "48", width: "48" })}
                />
              </span>
            </h1>
          </div>
          <p className=" font-Lato w-auto md:w-full md:text-xs md:font-medium md:mt-4 md:leading-5 text-justify text-xl font-medium text-pColor leading-9 not-italic mt-5 sm:text-xs sm:leading-[20px] sm:font-medium">
            While our core business has always been software development, we also help our
            clients scale up their marketing efforts when they need professional marketing
            assistance.
          </p>
        </div>
        <div className="flex flex-wrap px-12 lg:px-0 md:px-2 justify-around sm:w-full sm:h-auto sm:px-4">
          {marketingData.map((data) => (
            <div
              className={`pl-3 pr-8  h-auto md:h-auto w-1/2 sm:w-full sm:h-auto sm:my-2 hover:border-main hover:bg-white hover:border-b-4 r  hover:shadow-service 
               ${data.id > 2 ? "mt-12" : "mt-6"}`}
              key={`${data.id}`}
            >
              <div className=" pt-2 px-8 md:px-4 flex flex-col justify-around h-full ">
                <div className="mb-4 h-auto w-auto md:my-0">
                  {data.svg({
                    ...(isLg
                      ? { height: "31", width: "31" }
                      : isTab
                      ? { height: "30", width: "30" }
                      : isMobile
                      ? { height: "30", width: "30" }
                      : { height: "31", width: "31" })
                  })}
                </div>
                <h2 className="md:text-base  md:font-normal md:my-2 md:leading-6 text-2xl font-poppins font-normal leading-9 text-black not-italic sm:text-base sm:leading-[24px] sm:font-normal">
                  {data.title}
                </h2>

                <p className="md:text-xs md:my-1 md:leading-5 md:font-medium font-Lato w-auto md:w-full text-justify text-xl font-medium text-pColor leading-[30px] not-italic pb-8 md:pb-4 sm:text-xs sm:leading-[20px] sm:font-medium">
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
