import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo.png";
import headersup from "../../../public/assets/images/headersupport.png";
import SearchSVG from "../../../public/assets/svgs/searchSVG";
import Arrow from "../../../public/assets/svgs/arrow";
import PhoneSVG from "../../../public/assets/svgs/phoneSVG";
export function Header() {
  return (
    <header
      className={`text-white px-14 py-4 body-font bg-header-bg w-[1366px] h-[783px] bg-cover bg-no-repeat bg-center`}
    >
      <div className="container mx-auto flex flex-wrap py-5 px-14 flex-col md:flex-row items-center">
        <Link href="#">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <span classNameName="ml-3 text-xl">Tailblocks</span> */}
            <Image src={logo} alt="logo" className="ml-3 " />
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-9">
          <Link href="#">
            <a className="header-anchor">Home</a>
          </Link>
          <Link href="#">
            <a className="header-anchor">Our Work</a>
          </Link>
          <Link href="#">
            <a className="header-anchor">About Us!</a>
          </Link>
          <Link href="#">
            <a className="header-anchor">Ecommerce Guide</a>
          </Link>
          <Link href="#">
            <a className="header-anchor">Contact Us</a>
          </Link>
          <Link href="#">
            <a className="mr-5 ">
              <div className="w-[24px] h-[24px] flex justify-center items-center">
                <SearchSVG />
              </div>
            </a>
          </Link>
        </nav>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-14 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2  overflow-hidden sm:mr-10  flex flex-col justify-between relative text-white">
            <div className="mt-7">
              <h1 className="text-6xl font-bold font-poppins">Do Not Settle</h1>
            </div>
            <div>
              <div className="flex mb-1">
                <h3 className="text-4xl font-normal font-poppins">
                  Elevate Your Expectations
                </h3>
                <div className="h-[48px] w-[48px] flex justify-center items-center ml-4">
                  <Arrow />
                </div>
              </div>
            </div>
            <div>
              <p className="w-[639px] text-xl font-medium opacity-[0.8] leading-9 text-justify  mb-3 font-Lato">
                Benefit from a bespoke approach to hybrid technology outsourcing. Trust in
                a proven process to deliver your needs on time. Engage with an experienced
                USA based team in place to manage highly skilled offshore Pakistani
                developers.
              </p>
            </div>
            <div className="flex h-[54px] w-[185px] mb-3  bg-white  rounded-4xl flex justify-center items-center cursor-pointer">
              <div className="h-[19px] w-[19px]  ml-4">
                <PhoneSVG />
              </div>
              <span className="text-main ml-4 font-semibold font-poppins">
                Book a Call
              </span>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <Image
              src={headersup}
              alt="header support image"
              className="ml-3"
              height={394}
              width={394}
            />
          </div>
        </div>
      </section>
    </header>
  );
}
