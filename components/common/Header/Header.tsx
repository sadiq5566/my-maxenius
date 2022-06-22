import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo.png";
import headersup from "../../../public/assets/images/headersupport.png";
import SearchSVG from "../../../public/assets/svgs/searchSVG";
import Arrow from "../../../public/assets/svgs/arrow";
import CallingPhoneSVG from "../../../public/assets/svgs/CallingPhoneSVG";
import { useRouter } from "next/router";
import { HeaderProps } from "../../../Interfaces/headerInterface";

export function Header({ title, subTitle }: HeaderProps) {
  const imageWidth: Number = 394;
  const imageHeight: Number = 394;
  const router = useRouter();
  return (
    <header
      className={`text-white px-14 sm:px-4 py-4 body-font bg-header-bg w-full h-[783px] sm:h-auto bg-cover bg-no-repeat bg-center`}
    >
      <div className=" mx-auto sm:mx-0 flex flex-wrap py-5 px-14 sm:px-8 flex-row items-center md:flex-col sm:flex-row">
        <Link href="#">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 ">
            <Image src={logo} alt="logo" className="ml-3 " />
          </a>
        </Link>
        <nav className="ml-auto flex flex-wrap items-center text-base justify-center space-x-9 md:mx-auto md:mt-6 sm:mt-0 sm:mr-0 sm:non">
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
      <section className="relative">
        <div
          className={`px-14 py-24 mx-auto flex flex-nowrap sm:flex-col sm:px-8 sm:py-6 sm:h-auto ${
            router.pathname === "/ourwork" ? "justify-between items-center" : ""
          }`}
        >
          <div
            className={`w-2/3 sm:w-full sm:order-2  mr-10  flex flex-col ${
              router.pathname === "/ourwork" ? "" : "justify-between"
            } relative text-white sm:mt-24 sm:h-auto`}
          >
            <div
              className={` sm:h-auto ${
                router.pathname === "/ourwork" ? "mb-4" : "mt-7"
              } `}
            >
              <h1 className="text-6xl font-bold font-poppins sm:text-9xl sm:tracking-wider sm:mb-6">
                {title ? title : `Do Not Settle`}
              </h1>
            </div>

            {router.pathname === "/ourwork" ? (
              ""
            ) : (
              <div className="sm:h-auto">
                <div className="flex mb-1 sm:mt-3 ">
                  <h3 className="text-4xl font-normal font-poppins sm:text-7xl sm:tracking-widest">
                    Elevate Your Expectations
                  </h3>
                  <div className="h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] flex justify-center items-center ml-4">
                    <Arrow />
                  </div>
                </div>
              </div>
            )}

            <div>
              <p className="w-[639px]  sm:h-auto sm:tracking-widest sm:w-full sm:text-4xl sm:leading-[1.7] text-xl font-medium opacity-[0.8] leading-9 text-justify  mb-3 font-Lato sm:mt-8">
                {subTitle
                  ? subTitle
                  : `Benefit from a bespoke approach to
                hybrid technology outsourcing. Trust in a proven process to deliver your
                needs on time. Engage with an experienced USA based team in place to
                manage highly skilled offshore Pakistani developers.`}
              </p>
            </div>
            {router.pathname === "/ourwork" ? (
              ""
            ) : (
              <div className="flex h-[54px]  w-[185px]  sm:w-[350px] sm:rounded-full mb-3  bg-white  rounded-4xl justify-center items-center cursor-pointer sm:h-[100px] sm:mt-8">
                <div className="h-[19px] w-[19px] sm:h-[50px] sm:w-[50px] ml-4 flex justify-center items-center">
                  <CallingPhoneSVG />
                </div>
                <span className="text-main ml-4 sm:ml-2 font-semibold font-poppins sm:text-4xl sm:font-bold flex justify-center items-center">
                  Book a Call
                </span>
              </div>
            )}
          </div>
          <div className="w-1/3 sm:w-full flex flex-col md:ml-auto py-8 mt-0 relative sm:justify-center sm:items-center">
            <div
              className={` h-[${imageHeight}px] w-[${imageWidth}px] sm:h-1/2 sm:w-1/2  `}
            >
              <Image
                src={headersup}
                alt="header support image"
                className={`ml-3`}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
