import React, { useContext } from "react";
import { Button } from "../../Button";
import StateContext from "../../Context/StateContext";
import BuildingSVG from "../../public/assets/svgs/buildingSVG";
import CallingPhoneSVG from "../../public/assets/svgs/CallingPhoneSVG";
import CompassSVG from "../../public/assets/svgs/compassSVG";
import PersonsSVG from "../../public/assets/svgs/personsSVG";
import WorldSVG from "../../public/assets/svgs/worldSVG";
import CountUp from "react-countup";

const Clients = () => {
  const { isLg, isTab, isMobile } = useContext(StateContext);
  return (
    <div className="w-full h-[470px]  md:h-[301px] sm:h-[422px] xsm:h-[460px] bg-main relative">
      <section>
        <div className="container py-20 md:pt-12 md:pb-30 sm:py-12">
          <div className=" flex flex-row w-full sm:h-auto lg:flex-col lg:items-stretch lg:px-24 md:px-16 items-start justify-between px-24 sm:px-6 ">
            <div className="lg:mb-3 w-9/12 lg:w-full">
              <p className=" sm:w-full sm:h-auto sm:leading-[1.4] sm:tracking-widest sm:text-xs h-auto sm:font-medium text-white text-xl lg:text-lg font-medium  leading-9 text-justify  mb-3 font-Lato md:font-medium md:text-xs md:leading-[18px] md:font-Lato">
                `When you hire Maxenius, you ensure a commitment from American management
                and leadership and improve the quality of life of our developers in
                Pakistan. You will benefit from a hybrid outsourcing model without
                sacrificing quality.`
              </p>
              <h2 className=" font-poppins lg:my-5 md:my-0 sm:text-base sm:font-semibold sm:leading-4 font-semibold text-2xl lg:text-xl text-white leading-[48px] md:mt-2 md:text-[16px] md:font-semibold md:leading-6 ">
                CEO Maxenius - Usama Muhammad
              </h2>
            </div>

            <Button
              className="h-[54px] w-[185px] bg-white rounded-4xl  md:h-[34px] md:w-[118px] flex justify-center "
              preSVG={true}
              svg={CallingPhoneSVG}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </section>
      <div>
        <div className={`w-full`}>
          <div className="flex absolute -bottom-[70px]  md:-bottom-[40px]  justify-around w-full sm:flex-wrap  sm:h-[240px] xsm:h-[200px]sm:-bottom-[50px] sm:items-center xsm:items-start">
            <div className="w-[257px] h-[149px] relative bg-white flex flex-col justify-center items-center rounded-md shadow-service lg:w-[190px] lg:h-[120px] md:w-[127px] md:h-[99px] sm:w-[150px] sm:h-[90px] xsm:w-[110px] xsm:h-[75px] ">
              <div className="w-[78px] h-[78px] rounded-full bg-white border-main border-[6px] flex justify-center items-center absolute -top-10 z-10 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] md:-top-5  xsm:w-[35px] xsm:h-[35px]">
                <PersonsSVG
                  {...(isLg
                    ? { height: "40", width: "40" }
                    : isTab
                    ? { height: "24", width: "24" }
                    : isMobile
                    ? { height: "24", width: "24" }
                    : { height: "40", width: "40" })}
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <CountUp
                  start={20}
                  end={100}
                  duration={1}
                  className="font-poppins font-bold text-3xl text-gray-900 lg:text-2xl md:text-[22px] md:font-semibold xsm:text-base "
                  suffix="+"
                />
                <p className=" font-Lato text-xl lg:text-lg font-medium md:text-xs ">
                  Developers
                </p>
              </div>
            </div>
            <div className="w-[257px] h-[149px] relative bg-white flex flex-col justify-center items-center rounded-md shadow-service md:w-[127px] md:h-[99px] sm:w-[150px] sm:h-[90px] lg:w-[190px] lg:h-[120px] xsm:w-[110px] xsm:h-[75px]">
              <div className="w-[78px] h-[78px] rounded-full bg-white border-main border-[6px] flex justify-center items-center absolute -top-10 z-10 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] md:-top-5   xsm:w-[35px] xsm:h-[35px]">
                <CompassSVG
                  {...(isLg
                    ? { height: "40", width: "40" }
                    : isTab
                    ? { height: "24", width: "24" }
                    : isMobile
                    ? { height: "24", width: "24" }
                    : { height: "40", width: "40" })}
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <CountUp
                  end={2}
                  duration={1}
                  className="font-poppins font-bold text-3xl text-gray-900 lg:text-2xl md:text-[22px] md:font-semibold xsm:text-base"
                  suffix="K+"
                />
                <p className=" font-Lato text-xl lg:text-lg font-medium md:text-xs">
                  Customers Served
                </p>
              </div>
            </div>
            <div className="w-[257px] h-[149px] relative bg-white flex flex-col justify-center items-center rounded-md  shadow-service md:w-[127px] md:h-[99px] sm:w-[150px] sm:h-[90px] lg:w-[190px] lg:h-[120px] xsm:w-[110px] xsm:h-[75px]">
              <div className="w-[78px] h-[78px] rounded-full bg-white border-main border-[6px] flex justify-center items-center absolute -top-10 z-10 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] md:-top-5   xsm:w-[35px] xsm:h-[35px]">
                <WorldSVG
                  {...(isLg
                    ? { height: "40", width: "40" }
                    : isTab
                    ? { height: "24", width: "24" }
                    : isMobile
                    ? { height: "24", width: "24" }
                    : { height: "40", width: "40" })}
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <CountUp
                  start={400}
                  end={500}
                  duration={1}
                  className="font-poppins font-bold text-3xl text-gray-900 lg:text-2xl md:text-[22px] md:font-semibold xsm:text-base"
                  suffix="+"
                />
                <p className=" font-Lato text-xl lg:text-lg font-medium md:text-xs ">
                  Global Clients
                </p>
              </div>
            </div>
            <div className="w-[257px] h-[149px] relative bg-white flex flex-col justify-center items-center rounded-md  shadow-service md:w-[127px] md:h-[99px] sm:w-[150px] sm:h-[90px] lg:w-[190px] lg:h-[120px] xsm:w-[110px] xsm:h-[75px]">
              <div className="w-[78px] h-[78px] rounded-full bg-white border-main border-[6px] flex justify-center items-center absolute -top-10 z-10 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] md:-top-5  xsm:w-[35px] xsm:h-[35px]">
                <BuildingSVG
                  {...(isLg
                    ? { height: "40", width: "40" }
                    : isTab
                    ? { height: "24", width: "24" }
                    : isMobile
                    ? { height: "24", width: "24" }
                    : { height: "40", width: "40" })}
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <CountUp
                  start={0}
                  end={8}
                  duration={1}
                  className="font-poppins font-bold text-3xl text-gray-900 lg:text-2xl md:text-[22px] md:font-semibold xsm:text-base"
                />
                <p className=" font-Lato text-xl lg:text-lg font-medium md:text-xs ">
                  Years in Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
