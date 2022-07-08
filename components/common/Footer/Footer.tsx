import React, { useState } from "react";
import Phone from "../../svg/phone";
import AmericaFlag from "../../svg/america-flag";
import PakistanFlag from "../../svg/pakistan-flag";
import Location from "../../svg/location";
import DoubleDownArrow from "../../svg/double-down-arrow";

export function Footer() {
  const [selectAddress, setSelectAddress] = useState(1);
  const handleSelectAddress = (ad: number) => {
    setSelectAddress(ad);
  };
  return (
    <div className="w-100 bg-footer-house bg-right-bottom bg-no-repeat h-[695px] lg:h-[854px] bg-100%	">
      <div className="lg:w-50 lg:pl-40 pt-24 inline-block w-100 pl-5 pr-5 md:pl-5 ">
        <h1 className="text-[22px] lg:text-4xl inline-block font-['Poppins'] font-normal">
          Contact Us <Phone />
        </h1>
        <p className="text-xs lg:text-xl	text-[#6A6A6A] mt-5 w-80 font-['Lato'] font-medium">
          We operate our business just as we build software with a global mindset.
        </p>
        <div className="mt-6">
          <span className="inline-block" onClick={() => handleSelectAddress(1)}>
            <span
              className={`rounded-full inline-block  p-1 ${
                selectAddress === 1 && "border-red-700	border-2"
              }`}
            >
              <AmericaFlag />
            </span>
            {selectAddress === 1 && <DoubleDownArrow />}
          </span>
          <span className="inline-block" onClick={() => handleSelectAddress(2)}>
            <span
              className={`rounded-full inline-block  p-1 ml-3 ${
                selectAddress === 2 && "border-red-700	border-2"
              }`}
            >
              <PakistanFlag />
            </span>
            {selectAddress === 2 && <DoubleDownArrow />}
          </span>
          <span className="inline-block" onClick={() => handleSelectAddress(3)}>
            <span
              className={`rounded-full inline-block  p-1 ml-3 ${
                selectAddress === 3 && "border-red-700	border-2"
              }`}
            >
              <PakistanFlag />
            </span>
            {selectAddress === 3 && <DoubleDownArrow />}
          </span>
        </div>
        <h1 className="text-[22px] lg:text-4xl inline-block font-['Poppins'] font-normal mt-[15.42px]">
          {selectAddress === 1 && "USA, Ohio 44313"}
          {selectAddress === 2 && "PK, Lahore 5400"}
          {selectAddress === 3 && "PK, Lahore 5401"}
          <Location />
        </h1>
        <h2 className="text-base lg:text-xl text-[#000000] leading-9 w-18 font-['Lato'] font-bold mt-3">
          Address
        </h2>
        <p className="text-xs lg:text-xl	text-[#6A6A6A] leading-9 w-96 font-['Lato'] font-medium">
          736 Hampton Ridge Dr. Akron, Ohio 44313
        </p>
        <h3 className="text-base lg:text-xl	text-[#000000] leading-9 w-45 font-['Lato'] font-bold mt-3">
          Phone & WhatsApp:
        </h3>
        <p className="text-xs lg:text-xl	text-[#6A6A6A] leading-9 w-42 font-['Lato'] font-medium">
          +1 ‭(330) 285-3015‬
        </p>
        <h4 className="text-base lg:text-xl	text-[#000000] leading-9 w-13 font-['Lato'] font-bold mt-3">
          Email
        </h4>
        <p className="text-xs lg:text-xl	text-[#6A6A6A] leading-9 w-45 font-['Lato'] font-medium">
          usa@maxenius.com
        </p>
      </div>
    </div>
  );
}
