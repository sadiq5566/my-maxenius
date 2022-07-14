import React, { FC } from "react";

interface IProps {
  align: string;
  image: any;
  heading: string;
  para: string;
  mainStyle?: string;
}

const ImageTextSection: FC<IProps> = ({ align, image, heading, para, mainStyle }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${mainStyle}`}>
      {align === "left" && <div className="col-span-1">{image}</div>}
      <div className={`col-span-2 ${align === "left" && "ml-[68px]"}`}>
        <h1 className="text-4xl inline-block font-['Poppins'] font-normal">{heading}</h1>
        <p
          className={`text-xl text-[#6A6A6A] text-justify  ${
            align === "left" ? "w-full" : "w-[663px]"
          } mt-[35px] font-['Lato'] font-medium`}
        >
          {para}
        </p>
      </div>
      {align === "right" && <div className="col-span-1">{image}</div>}
    </div>
  );
};

export { ImageTextSection };
