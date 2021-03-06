import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../../Button";
import StateContext from "../../Context/StateContext";
import { ourWorkBlogData } from "../../data/ourWorkBlog";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";
export const Blog = () => {
  const { isLg, isTab, isMobile } = useContext(StateContext);
  return (
    <div className="w-full bg-serviceBg p-20 sm:py-4 sm:px-4">
      {ourWorkBlogData.map((data) => {
        return (
          <section className="my-12 shadow-service" key={`${data.id}`}>
            <div className="bg-white w-full h-auto md:h-auto p-10 md:px-0 md:py-10 sm:h-auto sm:px-0 sm:py-10 rounded-xl">
              <div className="items-center justify-center sm:flex hidden sm:w-full sm:mb-8">
                <Image
                  className="object-cover object-center"
                  alt="logo"
                  width={190}
                  height={48}
                  src={`${data.logo}`}
                  objectFit="contain"
                />
              </div>
              <div className=" flex flex-row rounded-xl sm:flex-col ">
                <div className="w-3/5 flex flex-col items-start justify-around pl-8 px-0  sm:text-left lg:w-full sm:items-center sm:order-2 mr-10">
                  {/* //////// logo.////  */}
                  <div className="flex items-center justify-start sm:hidden">
                    <Image
                      className="object-cover object-center"
                      alt="logo"
                      width={174}
                      height={48}
                      src={`${data.logo}`}
                      objectFit="contain"
                    />
                  </div>
                  {/* //////// h1 heading.////  */}
                  <div className="w-auto h-[96px]  sm:h-auto lg:w-full sm:mt-12 flex items-center">
                    <h1 className="font-poppins text-[31px] lg:text-3xl lg:leading-[40px] md:text-base md:leading-6 md:font-normal font-normal text-black leading-[48px]">
                      {data.title}
                      {/* <br className="hidden lg:inline-block" /> */}
                    </h1>
                  </div>
                  {/* //////// P tag description/// */}
                  <div className="w-auto lg:w-full sm:mt-4">
                    <p className="font-Lato font-medium text-xl leading-9 lg:text-lg lg:leading-7 md:text-xs md:leading-5 md:font-medium text-pColor text-justify">
                      {data.description}
                    </p>
                  </div>
                  {/* /////core technologies//// */}
                  <div className="lg:w-full flex lg:justify-between lg:mt-4 mt-6">
                    <div className=" lg:flex lg:justify-between lg:flex-col lg:w-2/4 md:py-8 sm:w-full">
                      <div className="w-auto h-auto">
                        <h3 className="font-Lato font-medium text-xl leading-9 lg:text-lg lg:leading-7  md:text-base md:leading-6 md:font-normal text-black text-justify">
                          Core Technologies:
                        </h3>
                        <ul className="flex list-disc pl-8 py-2 lg:flex-col mt-1">
                          {data.technologies.map((tech, i) => {
                            return (
                              <li
                                key={i}
                                className="mr-12 text-main sm:mr-0 md:mb-2 lg:mb-4"
                              >
                                <p className="bg-clip-text text-transparent bg-gradient-to-r from-gradient1 to-gradient2 font-Lato font-medium text-xl  leading-9 lg:text-md lg:leading-7 md:text-xs md:leading-5 md:font-medium text-justify">
                                  {tech}
                                </p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* ////image //// */}
                    <div className="w-2/5  lg:2/4 lg:block hidden sm:hidden">
                      <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        width={362}
                        height={302}
                        src={`${data.image}`}
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-2/5 flex justify-center items-center lg:hidden sm:flex sm:w-full">
                  <Image
                    className="object-cover object-center rounded sm:w-8/12"
                    alt="hero"
                    width={isMobile ? 190 : 362}
                    height={isMobile ? 158 : 302}
                    src={`${data.image}`}
                  />
                </div>
              </div>
              <div className="pl-8">
                <Button
                  className="flex h-[54px] w-[230px]  md:w-[150px] md:h-[34px] sm:rounded-full mb-3 bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer mt-8 lg:mt-2 md:mt-0"
                  preSVG={false}
                  svg={() =>
                    StraightArrowWhiteSvg({
                      ...(isLg
                        ? { height: "24", width: "40" }
                        : isTab
                        ? { height: "12", width: "20" }
                        : isMobile
                        ? { height: "16", width: "16" }
                        : { height: "24", width: "40" })
                    })
                  }
                >
                  View Case Study
                </Button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
