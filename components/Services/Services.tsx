import React, { useContext } from "react";
import { servicesData } from "../../data/Services";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";
import { useRouter } from "next/router";
import { Button } from "../../Button";
import ActiveLink from "../common/Header/ActiveLink";
import StateContext from "../../Context/StateContext";
export const Services = () => {
  const { isLg, isTab, isMobile } = useContext(StateContext);
  const router = useRouter();
  return (
    <div className="w-full h-auto  sm:h-auto py-20 bg-serviceBg ">
      <section className="body-font ">
        <div
          className={`container px-5 ${
            router.pathname === "/services" ? "pt-0" : "pt-24"
          }  pb-16 mx-auto`}
        >
          {router.pathname === "/services" ? (
            <div className="flex flex-col text-center sm:text-left sm:px-0 w-full mb-20">
              <div className="mb-4">
                <h3 className="font-Lato font-medium text-xl lg:leading-7 lg:text-lg md:leading-5 md:text-base md:font-medium leading-9 text-pColor sm:text-left">
                  What we do?
                </h3>
              </div>
              <div>
                <h1 className="text-black font-poppins font-normal text-4xl  lg:leading-7 lg:text-3xl md:leading-[30px] md:text-[22px] md:font-normal leading-9 sm:text-left">
                  Solve Your Toughest Challenges
                </h1>
              </div>
              <section>
                <style jsx>{`
                  .active {
                    border-radius: 9999px;
                    color: black;
                    background: white;
                    font-weight: 600;
                    border-bottom: 2px solid #e11c34;
                  }
                `}</style>

                <div
                  className=" px-5 lg:px-0 pt-10 mx-auto flex flex-wrap flex-col"
                  id="services"
                >
                  <div className="flex flex-wrap mx-48 lg:mx-24 md:mx-12 sm:mx-0 md:text-base md:leading-5 md:font-semibold ">
                    <ActiveLink activeClassName="active" href="/services#services">
                      <a className="services-anchor  sm:px-auto ">Software Development</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/services#Consultancy">
                      <a className="services-anchor   sm:px-auto">Consultancy</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/services#Enterprise">
                      <a className="services-anchor  sm:px-auto">Enterprise Solutions</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/services#Emerging">
                      <a className="services-anchor  sm:px-auto">Emerging Technologies</a>
                    </ActiveLink>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div className="flex flex-col text-center sm:text-left sm:px-8 w-full mb-20">
              <h1 className="font-poppins font-normal text-4xl not-italic leading-[48px] text-black sm:text-[22px] sm:leading-[24px] sm:font-normal">
                Services We Offer
              </h1>
            </div>
          )}

          <div className="flex flex-wrap mx-4 lg:mx-24 md:mx-8">
            {servicesData.map((service) => {
              return (
                <div
                  className={`w-1/3 lg:w-1/2 sm:w-full mt-4 sm:mt-0 flex sm:mb-8`}
                  key={`${service.id}`}
                >
                  <div
                    className={`h-[278px] sm:h-auto  md:h-auto w-auto lg:w-full flex flex-col justify-around  rounded-md py-8 md:py-4 md:px-6 px-10 bg-serviceBg sm:py-0 
                      hover:border-main hover:bg-white hover:border-b-4 r  hover:shadow-service `}
                  >
                    <div className="md:h-[30px] sm:w-[30px] md:mb-3 ">
                      {service.svg({
                        ...(isLg
                          ? { height: "31", width: "31" }
                          : isTab
                          ? { height: "30", width: "30" }
                          : isMobile
                          ? { height: "30", width: "30" }
                          : { height: "31", width: "31" })
                      })}
                    </div>
                    <div className="flex-grow mt-4 md:mt-2 sm:mt-0 flex flex-col justify-evenly  ">
                      <h2 className="leading-9 text-black text-2xl lg:text-xl lg:leading-7 font-normal font-poppins md:text-base md:leading-6 md:font-normal sm:text-base sm:leading-[24px] sm:font-normal md:mb-2">
                        {service.title}
                      </h2>
                      <p className="font-Lato text-pColor md:my-0 font-medium sm:text-xs sm:my-2 sm:tracking-widest sm:leading-5 sm:h-auto text-xl leading-[30px] lg:text-lg lg:leading-[24px] w-[270px] lg:w-full lg:mt-4 h-[120px] md:h-auto text-justify not-italic md:text-xs md:leading-[20px] md:font-medium">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {router.pathname === "/services" ? (
          ""
        ) : (
          <div className="w-full flex justify-center  items-center">
            <Button
              svg={() =>
                StraightArrowWhiteSvg({
                  ...(isLg
                    ? { height: "24", width: "40" }
                    : isTab
                    ? { height: "16", width: "16" }
                    : isMobile
                    ? { height: "16", width: " 16" }
                    : { height: "24", width: "40" })
                })
              }
              // className="h-[54px] w-full flex justify-center sm:my-2"
              className="flex h-[54px] w-[230px]  md:w-[150px] md:h-[34px] sm:rounded-full mb-3 bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer "
              preSVG={false}
            >
              View All Services
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};
