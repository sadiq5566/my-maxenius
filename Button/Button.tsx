import React from "react";
import { btnInterface } from "../Interfaces/btnInterface";

export const Button = ({ className = "", svg, children, preSVG }: btnInterface) => {
  return (
    <>
      {preSVG ? (
        <div
          className={` ${
            className
              ? `${className}`
              : "flex h-[54px] w-[185px]  md:w-[118px] md:h-[36px] sm:rounded-full mb-3 bg-white rounded-4xl justify-center items-center cursor-pointer "
          } `}
        >
          <div
            className={`h-[19px] w-[19px] flex justify-center items-center ${className}`}
          >
            {svg ? svg({}) : ""}
          </div>
          <span className=" text-main text-base ml-4 sm:ml-2 font-semibold font-poppins sm:text-xs  flex justify-center items-center">
            {children}
          </span>
        </div>
      ) : (
        <div
          className={` ${
            className ? `${className}` : "w-full flex justify-center items-center sm:my-2"
          } `}
        >
          <div className="flex h-[54px] w-[230px]  md:w-[150px] md:h-[34px] sm:rounded-full mb-3 bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer">
            <span
              className={`text-white text-base leading-4 font-semibold md:text-xs  md:font-bold font-poppins `}
            >
              {children}
            </span>
            <div className="h-[24px] w-[24px] md:h-[16px] md:w-[16px]  ml-2 flex justify-center items-center">
              {svg ? svg({}) : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
