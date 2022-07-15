import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo.png";
import headersup from "../../../public/assets/images/headersupport.png";
import Arrow from "../../../public/assets/svgs/arrow";
import CallingPhoneSVG from "../../../public/assets/svgs/CallingPhoneSVG";
import { useRouter } from "next/router";
import { HeaderProps } from "../../../Interfaces/headerInterface";
import { Button } from "../../../Button";
import Nav from "./Nav";
import StateContext from "../../../Context/StateContext";

export function Header({ title, subTitle }: HeaderProps) {
  const router = useRouter();
  const { isLg, setIsLg, isTab, setIsTab, isMobile, setIsMobile } =
    useContext(StateContext);

  const handleResize = () => {
    if (window.innerWidth <= 1024 && window.innerWidth > 768) {
      setIsLg!(true);
      setIsTab!(false);
      setIsMobile!(false);
    } else if (window.innerWidth <= 768 && window.innerWidth > 500) {
      setIsTab!(true);
      setIsLg!(false);
      setIsMobile!(false);
    } else if (window.innerWidth <= 500) {
      setIsMobile!(true);
      setIsLg!(false);
      setIsTab!(false);
    } else {
      setIsLg!(false);
      setIsTab!(false);
      setIsMobile!(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <header
      className={`text-white px-14 md:px-4 py-4 body-font bg-header-bg w-full h-auto sm:h-auto bg-cover bg-no-repeat bg-center`}
    >
      <div className=" mx-auto lg:flex-col flex flex-wrap py-5 px-14  md:mx-2  md:px-2 md:py-2 flex-row items-center ">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 ">
            <Image src={logo} alt="logo" className="ml-3 " />
          </a>
        </Link>
        <Nav />
      </div>
      <section className="relative">
        <div
          className={`px-14 py-24 lg:py-12 md:px-7 md:py-6 mx-auto flex flex-nowrap sm:flex-col sm:px-6 sm:py-6 sm:h-auto ${
            router.pathname === "/ourwork" ? "justify-between items-center" : ""
          }`}
        >
          <div
            className={`w-2/3 sm:w-full sm:order-2 flex flex-col mr-32 lg:mr-16 sm:mt-2 md:mr-12 ${
              router.pathname === "/ourwork" ? "" : "justify-between"
            }  ${
              router.pathname === "/services" ? "justify-evenly" : ""
            }  relative text-white sm:mt-8 sm:h-auto`}
          >
            <div
              className={` sm:h-auto ${
                router.pathname === "/ourwork" ? "mb-4" : "mt-7"
              } `}
            >
              <h1 className="text-6xl font-bold font-poppins lg:text-4xl lg:leading-10  lg:mb-2  md:text-4xl md:leading-10 md:font-bold  sm:mb-2 sm:text-4xl sm:leading-10 sm:font-bold ">
                {title ? title : `Do Not Settle`}
              </h1>
            </div>

            {router.pathname === "/ourwork" || router.pathname === "/services" ? (
              ""
            ) : (
              <div className="sm:h-auto lg:mt-2 w-auto sm:mt-0">
                <div className="flex mb-1  items-center">
                  <h3 className="text-4xl font-normal lg:text-[22px] font-poppins w-auto sm:text-[22px] sm:font-normal">
                    Elevate Your Expectations
                  </h3>
                  <div
                    className={`flex justify-center items-center ml-4 lg:ml-2 h-auto w-auto`}
                  >
                    <Arrow
                      {...(isLg
                        ? { height: "24", width: "40" }
                        : isTab
                        ? { height: "16", width: "16" }
                        : isMobile
                        ? { height: "16", width: "16" }
                        : { height: "24", width: "40" })}
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <p className="w-auto md:text-xs md:leading-5 md:font-medium md:pr-20 sm:pr-0 lg:mb-6 tracking-widder  lg:leading-5 lg:font-medium sm:w-full sm:text-xs sm:leading-5 text-xl lg:text-lg font-medium opacity-[0.8] leading-9 text-justify mb-3 font-Lato ">
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
              <Button
                className="h-[54px] w-[185px] bg-white rounded-4xl  md:h-[34px] md:w-[118px] flex justify-center"
                preSVG={true}
                svg={() =>
                  CallingPhoneSVG({
                    ...(isLg
                      ? { height: "24", width: "24" }
                      : isTab
                      ? { height: "16", width: "16" }
                      : isMobile
                      ? { height: "16", width: "16" }
                      : { height: "24", width: "24" })
                  })
                }
              >
                Book a Call
              </Button>
            )}
          </div>
          <div className="w-1/3 sm:w-full flex flex-col sm:ml-auto py-8 mt-0  relative sm:justify-center sm:items-center">
            <div className={`h-auto w-auto sm:h-1/2 sm:w-1/2 `}>
              <Image
                src={headersup}
                alt="header support image"
                className={`ml-3`}
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
