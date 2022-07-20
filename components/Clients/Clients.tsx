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
  const isWindow = typeof window !== "undefined";
  const { isLg, isTab, isMobile } = useContext(StateContext);
  return (
    <div className="w-full  h-[470px] lg:h-auto sm:h-[455px]  bg-main relative">
      <section>
        <div className="container mx-auto py-20 sm:py-10">
          <div className=" flex flex-row w-full sm:h-auto lg:flex-col lg:items-stretch lg:px-32 md:px-12 items-start justify-between px-20 sm:px-8">
            <div className="lg:mb-3 w-9/12 lg:w-full">
              <p className=" sm:w-full sm:h-auto sm:leading-[1.4] sm:tracking-widest sm:text-xs h-auto sm:font-medium text-white text-xl font-medium  leading-9 text-justify  mb-3 font-Lato">
                `When you hire Maxenius, you ensure a commitment from American management
                and leadership and improve the quality of life of our developers in
                Pakistan. You will benefit from a hybrid outsourcing model without
                sacrificing quality.`
              </p>
              <h2 className=" font-poppins lg:mt-3 sm:text-base sm:font-semibold sm:leading-6 font-semibold text-2xl text-white leading-[48px] sm:mt-6">
                CEO Maxenius - Usama Muhammad
              </h2>
            </div>

            <Button
              className=" h-[54px] w-[185px] bg-white rounded-4xl  md:h-[34px] md:w-[118px] flex justify-center"
              preSVG={true}
              svg={CallingPhoneSVG}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </section>
      <div>
        <section className="bg-transparent">
          <div className="container absolute left-0 right-0 sm:-bottom-30">
            <div className="inline-flex md:flex-wrap justify-between w-full mt-10 px-14 lg:px-8 md:px-2 py-4 md:py-3 sm:px-8 lg:-mt-14 sm:mt-0 sm:py-0 ">
              <div className=" w-[257px] h-[149px] lg:w-[200px] lg:h-auto border-2 border-gray-200 px-6  py-12 lg:py-8 lg:px-4  rounded-lg bg-white relative md:w-[150px] md:h-[89px] text-center">
                <div className="h-[78px] w-[78px]  lg:h-[60px] lg:w-[60px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
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
                <div className="flex flex-col justify-center items-center">
                  <CountUp
                    start={20}
                    end={100}
                    suffix="+"
                    className="title-font font-bold text-3xl md:text-xl md:font-semibold text-gray-900 sm:text-[22px] sm:leading-6 sm:font-semibold"
                  />
                  <p className="leading-6 text-xl font-medium lg:text-lg md:text-xs sm:text-xs sm:leading-[18px] sm:font-medium">
                    Developers
                  </p>
                </div>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12 rounded-lg bg-white relative w-[257px] h-[149px] lg:w-[200px] lg:h-auto lg:py-8 lg:px-4 md:w-[150px] md:h-[89px] text-center">
                <div className="h-[78px] w-[78px]  lg:h-[60px] lg:w-[60px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
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
                <CountUp
                  end={2}
                  className="title-font font-bold  text-3xl text-gray-900 md:text-xl md:font-semibold sm:text-[22px] sm:leading-6 sm:font-semibold"
                  suffix="K+"
                />

                <p className="leading-6 text-xl font-medium lg:text-lg md:text-xs sm:text-xs sm:leading-[18px] sm:font-medium">
                  Customers Served
                </p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12  rounded-lg bg-white relative w-[257px] h-[149px] lg:w-[200px] lg:h-auto lg:py-8 lg:px-4 md:w-[150px] md:h-[89px] sm:mt-16  text-center">
                <div className="h-[78px] w-[78px] lg:h-[60px] lg:w-[60px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
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
                <CountUp
                  start={400}
                  end={500}
                  className="title-font font-bold  text-3xl text-gray-900 md:text-xl md:font-semibold sm:text-[22px] sm:leading-6 sm:font-semibold"
                  suffix="+"
                />

                <p className="leading-6 text-xl lg:text-lg font-medium md:text-xs sm:text-xs sm:leading-[18px] sm:font-medium">
                  Global Clients
                </p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12 rounded-lg relative bg-white w-[257px] h-[149px] lg:w-[200px] lg:h-auto lg:py-8 lg:px-4 md:w-[150px] md:h-[89px] sm:mt-16   text-center">
                <div className="h-[78px] w-[78px] lg:h-[60px] lg:w-[60px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
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
                <CountUp
                  start={0}
                  end={8}
                  className="title-font font-bold  text-3xl text-gray-900 md:text-xl md:font-semibold sm:text-[22px] sm:leading-6 sm:font-semibold"
                />
                <p className=" leading-6 text-xl font-medium lg:text-lg md:text-xs sm:text-xs sm:leading-[18px] sm:font-medium">
                  Years in Business
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
