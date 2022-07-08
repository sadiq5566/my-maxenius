import React from "react";
import Phone from "../../svg/phone";
import AmericaFlag from "../../svg/america-flag";
import PakistanFlag from "../../svg/pakistan-flag";
import Location from "../../svg/location";
import DoubleDownArrow from "../../svg/double-down-arrow";

export function Footer() {
  return (
    <div className="w-100 bg-footer-house bg-right-top bg-no-repeat h-[1053px] bg-cover	">
      <div className="w-50 pl-40	pt-28 inline-block">
        <h1 className="text-4xl inline-block font-['Poppins'] font-normal">
          Contact Us <Phone />
        </h1>
        <p className="text-sm	text-[#6A6A6A] mt-5 w-80 font-['Lato'] font-medium">
          We operate our business just as we build software with a global mindset.
        </p>
        <div className="mt-6">
          <span className="inline-block">
            <span className="rounded-full inline-block border-red-700	border-2 p-1">
              <AmericaFlag />
            </span>
            <DoubleDownArrow />
          </span>
          <span className="rounded-full inline-block  p-1 ml-3">
            <PakistanFlag />
          </span>
          <span className="rounded-full inline-block p-1 ml-3">
            <PakistanFlag />
          </span>
        </div>
        <h1 className="text-4xl inline-block font-['Poppins'] font-normal mt-11">
          USA, Ohio 44313 <Location />
        </h1>
        <h2 className="text-xl text-[#000000] leading-9 w-18 font-['Lato'] font-bold mt-3">
          Address
        </h2>
        <p className="text-xl	text-[#6A6A6A] leading-9 w-96 font-['Lato'] font-medium">
          736 Hampton Ridge Dr. Akron, Ohio 44313
        </p>
        <h3 className="text-xl	text-[#000000] leading-9 w-45 font-['Lato'] font-bold mt-3">
          Phone & WhatsApp:
        </h3>
        <p className="text-xl	text-[#6A6A6A] leading-9 w-42 font-['Lato'] font-medium">
          +1 ‭(330) 285-3015‬
        </p>
        <h4 className="text-xl	text-[#000000] leading-9 w-13 font-['Lato'] font-bold mt-3">
          Email
        </h4>
        <p className="text-xl	text-[#6A6A6A] leading-9 w-45 font-['Lato'] font-medium">
          usa@maxenius.com
        </p>
      </div>
    </div>
  );
}
