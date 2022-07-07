import React from "react";
import BuildingSVG from "../../public/assets/svgs/buildingSVG";
import CallingPhoneSVG from "../../public/assets/svgs/CallingPhoneSVG";
import CompassSVG from "../../public/assets/svgs/compassSVG";
import PersonsSVG from "../../public/assets/svgs/personsSVG";
import WorldSVG from "../../public/assets/svgs/worldSVG";

const Clients = () => {
  return (
    <div className="w-full  h-[470px] bg-main">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto py-20 ">
          <div className=" flex flex-col sm:flex-row sm:items-center justify-between px-20 ">
            <div>
              <p className="w-[806px] h-[108px] text-white text-xl  font-light  leading-9 text-justify  mb-3 font-Lato">
                `When you hire Maxenius, you ensure a commitment from American management
                and leadership and improve the quality of life of our developers in
                Pakistan. You will benefit from a hybrid outsourcing model without
                sacrificing quality.`
              </p>
              <h2 className=" font-poppins font-semibold text-2xl text-white leading-[48px] ">
                CEO Maxenius - Usama Muhammad
              </h2>
            </div>
            <div className="flex h-[54px] w-[185px] mb-3 self-start bg-white  rounded-4xl justify-center items-center cursor-pointer">
              <div className="h-[19px] w-[19px]  ml-4">
                <CallingPhoneSVG />
              </div>
              <span className="text-main ml-4 font-semibold font-poppins">
                Book a Call
              </span>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="text-gray-600 bg-transparent body-font ">
          <div className="container px-16 py-20 mx-auto">
            <div className="flex flex-wrap -m-4 text-center justify-between">
              <div className="border-2 border-gray-200 px-6  py-12 rounded-lg bg-white relative w-[257px] h-[149px] ">
                <div className="h-[78px] w-[78px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <PersonsSVG />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">100+</h2>
                <p className="leading-relaxed">Developers</p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12 relative rounded-lg bg-white relative w-[257px] h-[149px]">
                <div className="h-[78px] w-[78px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <CompassSVG />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">2K+</h2>
                <p className="leading-relaxed">Customers Served</p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12 relative rounded-lg bg-white relative w-[257px] h-[149px]">
                <div className="h-[78px] w-[78px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <WorldSVG />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">500+</h2>
                <p className="leading-relaxed">Global Clients</p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12 relative rounded-lg relative bg-white w-[257px] h-[149px]">
                <div className="h-[78px] w-[78px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <BuildingSVG />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">8</h2>
                <p className="leading-relaxed">Years in Business</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
