import Image from "next/image";
import React from "react";
import { blogData } from "../../data/Blog";

export const Blog = () => {
  return (
    <section className="w-full body-font h-[1237px] lg:h-auto  py-20 px-24 md:px-16 sm:px-6">
      {blogData.map((blog) => (
        <div className=" mx-auto h-1/2 flex flex-wrap lg:mb-8" key={`${blog.id}`}>
          <div
            className={`flex flex-wrap w-1/2 sm:w-full sm:order-2 ${
              blog.id == 2 ? "order-2" : ""
            } `}
          >
            <div className="w-full pl-4 pr-14 md:px-0 mb-6 md:py-4 flex flex-col justify-center ">
              <h1 className="font-poppins font-normal text-4xl md:text-[22px] md:font-normal md:leading-6 lg:text-3xl lg:font-normal lg:leading-7 leading-[48px] mb-8 text-black sm:text-[22px] sm:leading-[24px] sm:font-normal">
                {blog.title}
              </h1>
              <div className=" h-auto w-auto sm:h-auto sm:w-full sm:text-xs sm:leading-[20px] sm:font-medium  md:text-xs md:font-medium md:leading-5 lg:text-base lg:font-medium lg:leading-6  font-Lato not-italic font-medium text-xl leading-9 text-justify text-pColor">
                {blog.description}
              </div>
            </div>
          </div>
          <div className="w-1/2 sm:w-full sm:mb-12 rounded-lg overflow-hidden mt-6 flex items-center justify-center">
            <Image
              src={`${blog.image}`}
              alt="image of blog"
              width={`${blog.width}`}
              height={`${blog.height}`}
              objectFit="contain"
            />
          </div>
        </div>
      ))}
    </section>
  );
};
