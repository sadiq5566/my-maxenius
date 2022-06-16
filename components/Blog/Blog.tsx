import Image from "next/image";
import React from "react";
import { blogData } from "../../data/Blog";

export const Blog = () => {
  return (
    <section className="w-full body-font h-[1237px] py-20 px-[100px]">
      {blogData.map((blog) => (
        <div className="container  mx-auto h-1/2 flex flex-wrap" key={`${blog.id}`}>
          <div
            className={`flex flex-wrap lg:w-1/2 sm:w-2/3  sm:pr-10 ${
              blog.id == 2 ? "order-2" : ""
            } `}
          >
            <div className="w-full sm:p-4 px-4 mb-6 flex flex-col justify-center ">
              <h1 className="font-poppins font-normal text-4xl leading-[48px] mb-8 text-black ">
                {blog.title}
              </h1>
              <div className=" h-[216px] w-[479px] font-Lato not-italic font-medium text-xl leading-9 text-justify text-pColor">
                {blog.description}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3  rounded-lg overflow-hidden mt-6 sm:mt-0  flex items-center justify-center">
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
