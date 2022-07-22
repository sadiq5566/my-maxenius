import React, { FC } from "react";

interface IProps {
  image: any;
  heading: string;
  para: string;
  mainStyle?: string;
  textStyle?: string;
}

const ImageTextSection: FC<IProps> = ({ image, heading, para, mainStyle, textStyle }) => {
  return (
    <div className={`flex flex-wrap ${mainStyle}`}>
      <div className="sm:w-full md:w-1/3 w-1/3 sm:mx-auto md:mx-0 mx-0 sm:mb-[46.60px] mb-[46.60px]  my-0 flex justify-center justify-start">
        {image}
      </div>
      <div
        className={`sm:w-full md:w-2/3 w-2/3 flex justify-center align-center flex-col`}
      >
        <h1
          className={`sm:text-[22px] text-4xl inline-block font-['Poppins'] font-normal  ${textStyle}`}
        >
          {heading}
        </h1>
        <p
          className={`sm:text-xs	text-xl text-[#6A6A6A] text-justify sm:mt-[10px] mt-[35px] font-['Lato'] font-medium sm:w-full md:w-[463px] lg:w-[463px] w-[663px]  ${textStyle}`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

export { ImageTextSection };
