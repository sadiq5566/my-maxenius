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
      <div className="w-full md:w-1/3 lg:w-1/3 mx-auto md:mx-0 lg:mx-0 mb-[46.60px] md:mb-[46.60px]  lg:my-0 flex justify-center lg:justify-start">
        {image}
      </div>
      <div
        className={`w-3/3 md:w-2/3 lg:w-2/3 flex justify-center align-center flex-col`}
      >
        <h1
          className={`text-[22px] lg:text-4xl inline-block font-['Poppins'] font-normal  ${textStyle}`}
        >
          {heading}
        </h1>
        <p
          className={`text-xs	lg:text-xl text-[#6A6A6A] text-justify mt-[10px] lg:mt-[35px] font-['Lato'] font-medium w-full md:w-[463px] lg:w-[463px] xl:w-[663px]  ${textStyle}`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

export { ImageTextSection };
