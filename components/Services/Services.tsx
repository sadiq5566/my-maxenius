import React from "react";
import { servicesData } from "../../data/Services";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";
import { useRouter } from "next/router";
import { Button } from "../../Button";
import ActiveLink from "../common/Header/ActiveLink";
export const Services = () => {
  const router = useRouter();

  return (
    <div className="w-full h-auto md:h-[2000px] sm:h-auto py-20 bg-serviceBg ">
      <section className="body-font ">
        <div
          className={`container px-5 ${
            router.pathname === "/services" ? "pt-0" : "pt-24"
          }  pb-16 mx-auto`}
        >
          {router.pathname === "/services" ? (
            <div className="flex flex-col text-center sm:text-left sm:px-8 w-full mb-20">
              <div className="mb-4">
                <h3 className="font-Lato font-medium text-xl leading-9 text-pColor sm:text-center">
                  What we do?
                </h3>
              </div>
              <div>
                <h1 className="text-black font-poppins font-normal text-4xl sm:text-center">
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
                  className=" px-5 pt-10 mx-auto flex flex-wrap flex-col"
                  id="services"
                >
                  <div className="flex flex-wrap mx-48 ">
                    <ActiveLink activeClassName="active" href="/services#services">
                      <a className="services-anchor  sm:px-auto ">Software Development</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/services#Consultancy">
                      <a className="services-anchor  sm:px-auto">Consultancy</a>
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
              <h1 className="font-poppins font-normal text-4xl not-italic sm:text-8xl leading-[48px] text-black">
                Services We Offer
              </h1>
            </div>
          )}

          <div className="flex flex-wrap mx-4 md:mx-24">
            {servicesData.map((service) => {
              return (
                <div
                  className={`w-1/3 md:w-1/2 sm:w-full mt-4 sm:mt-2 flex sm:mb-20`}
                  key={`${service.id}`}
                >
                  <div
                    className={`h-[278px] w-[367px]  md:w-full flex flex-col justify-around  rounded-md py-8 px-10 bg-serviceBg 
                      hover:border-main hover:bg-white hover:border-b-4 r sm:hover:h-auto hover:shadow-service `}
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
        {router.pathname === "/services" ? (
          ""
        ) : (
          <Button
            svg={StraightArrowWhiteSvg}
            className="w-full flex justify-center items-center sm:my-12"
            preSVG={false}
          >
            View All Services
          </Button>
        )}
      </section>
    </div>
  );
};
