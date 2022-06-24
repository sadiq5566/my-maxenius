import Image from "next/image";
import React from "react";
import { Button } from "../../Button";
import { ourWorkBlogData } from "../../data/ourWorkBlog";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";
import CarouselItemIcons from "./CarouselItemIcons";

export const SingleBlogData = ({ item }: { item: Number }) => {
  return (
    <>
      {ourWorkBlogData
        .filter((blogData) => blogData.id === item)
        .map((data) => {
          return (
            <div key={`${data.id}`} className="bg-transparent w-full px-32">
              <div className="bg-white w-full h-[575px]  rounded-xl p-12 sm:h-auto sm:px-2 sm:py-12">
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
                <div className=" flex flex-row    rounded-xl  sm:flex-col ">
                  <div className="w-3/5 flex flex-col items-start justify-around px-12  sm:text-left md:w-full sm:items-center sm:order-2">
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
                    <div className="w-[479px] md:w-full sm:mt-16">
                      <h1 className="font-poppins text-4xl  font-normal text-black leading-[48px]">
                        {data.title}

                        {/* <br className="hidden lg:inline-block" /> */}
                      </h1>
                    </div>
                    {/* //////// P tag description/// */}
                    <div className="w-[559px] md:w-full sm:mt-4">
                      <p className="font-Lato font-medium text-xl leading-9 text-pColor text-justify">
                        {data.description}
                      </p>
                    </div>
                    {/* /////core technologies//// */}
                    <div className="md:w-full flex md:justify-between md:mt-4">
                      <div className=" md:flex md:justify-between md:flex-col md:w-2/4">
                        <div className="">
                          <h3 className="font-Lato font-medium text-xl leading-9 text-black text-justify">
                            Core Technologies:
                          </h3>
                          <ul className="flex list-disc pl-10 py-2 md:flex-col mt-1">
                            {data.technologies.map((tech, i) => {
                              return (
                                <li key={i} className="mr-12 text-main">
                                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-gradient1 to-gradient2 font-Lato font-medium text-xl leading-9 text-justify">
                                    {tech}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <Button
                          className=" w-full flex sm:my-12 mt-12"
                          preSVG={false}
                          svg={StraightArrowWhiteSvg}
                        >
                          View Case Study
                        </Button>
                      </div>
                      {/* ////image //// */}
                      <div className="w-2/5  md:2/4 md:block hidden sm:hidden">
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
                  <div className="w-2/5 flex justify-center items-center md:hidden sm:flex sm:w-full">
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
            </div>
          );
        })}
      <CarouselItemIcons item={item} limit={3} />
    </>
  );
};