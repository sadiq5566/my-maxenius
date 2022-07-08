// import React from "react";
// import { Button } from "../../Button";
// import BuildingSVG from "../../public/assets/svgs/buildingSVG";
// import CallingPhoneSVG from "../../public/assets/svgs/CallingPhoneSVG";
// import CompassSVG from "../../public/assets/svgs/compassSVG";
// import PersonsSVG from "../../public/assets/svgs/personsSVG";
// import WorldSVG from "../../public/assets/svgs/worldSVG";

// const Clients = () => {
//   return (
//     <div className="w-full  h-[470px] sm:h-[660px] bg-main">
//       <section className="">
//         <div className="container mx-auto py-20 ">
//           <div className=" flex flex-row sm:h-[450px] lg:flex-col lg:items-stretch lg:px-32 items-center justify-between px-20 sm:px-8">
//             <div className="lg:mb-3">
//               <p className="w-[806px] sm:w-full sm:h-auto sm:leading-[1.4] sm:tracking-widest sm:text-4xl h-[108px] text-white text-xl  font-light  leading-9 text-justify  mb-3 font-Lato">
//                 `When you hire Maxenius, you ensure a commitment from American management
//                 and leadership and improve the quality of life of our developers in
//                 Pakistan. You will benefit from a hybrid outsourcing model without
//                 sacrificing quality.`
//               </p>
//               <h2 className=" font-poppins sm:text-6xl font-semibold text-2xl text-white leading-[48px] sm:mt-6">
//                 CEO Maxenius - Usama Muhammad
//               </h2>
//             </div>

//             <Button className="" preSVG={true} svg={CallingPhoneSVG}>
//               Book a Call
//             </Button>
//           </div>
//         </div>
//       </section>
//       <div>
//         <section className=" bg-transparent ">
//           <div className="container px-16 py-20 mx-auto lg:py-1  ">
//             <div className="flex flex-wrap -m-4 text-center justify-between">
//               <div className="border-2 border-gray-200 px-6  py-12 rounded-lg bg-white relative w-[257px] h-[149px] ">
//                 <div className="h-[78px] w-[78px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
//                   <PersonsSVG />
//                 </div>
//                 <h2 className="title-font font-medium text-3xl text-gray-900">100+</h2>
//                 <p className="leading-relaxed">Developers</p>
//               </div>

//               <div className="border-2 border-gray-200 px-6 py-12 rounded-lg bg-white relative w-[257px] h-[149px]">
//                 <div className="h-[78px] w-[78px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
//                   <CompassSVG />
//                 </div>
//                 <h2 className="title-font font-medium text-3xl text-gray-900">2K+</h2>
//                 <p className="leading-relaxed">Customers Served</p>
//               </div>

//               <div className="border-2 border-gray-200 px-6 py-12  rounded-lg bg-white relative w-[257px] h-[149px]">
//                 <div className="h-[78px] w-[78px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
//                   <WorldSVG />
//                 </div>
//                 <h2 className="title-font font-medium text-3xl text-gray-900">500+</h2>
//                 <p className="leading-relaxed">Global Clients</p>
//               </div>

//               <div className="border-2 border-gray-200 px-6 py-12 rounded-lg relative bg-white w-[257px] h-[149px]">
//                 <div className="h-[78px] w-[78px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
//                   <BuildingSVG />
//                 </div>
//                 <h2 className="title-font font-medium text-3xl text-gray-900">8</h2>
//                 <p className="leading-relaxed">Years in Business</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Clients;

import React from "react";
import { Button } from "../../Button";
import BuildingSVG from "../../public/assets/svgs/buildingSVG";
import CallingPhoneSVG from "../../public/assets/svgs/CallingPhoneSVG";
import CompassSVG from "../../public/assets/svgs/compassSVG";
import PersonsSVG from "../../public/assets/svgs/personsSVG";
import WorldSVG from "../../public/assets/svgs/worldSVG";

const Clients = () => {
  return (
    <div className="w-full  h-[400px] lg:h-auto sm:h-[660px] bg-main ">
      <section className="">
        <div className="container mx-auto py-20 ">
          <div className=" flex flex-row w-full sm:h-[450px] lg:flex-col lg:items-stretch lg:px-32 items-start justify-between px-20 sm:px-8">
            <div className="lg:mb-3 w-9/12 lg:w-full">
              <p className=" sm:w-full sm:h-auto sm:leading-[1.4] sm:tracking-widest sm:text-4xl h-auto text-white text-xl font-medium  leading-9 text-justify  mb-3 font-Lato">
                `When you hire Maxenius, you ensure a commitment from American management
                and leadership and improve the quality of life of our developers in
                Pakistan. You will benefit from a hybrid outsourcing model without
                sacrificing quality.`
              </p>
              <h2 className=" font-poppins lg:mt-3 sm:text-6xl font-semibold text-2xl text-white leading-[48px] sm:mt-6">
                CEO Maxenius - Usama Muhammad
              </h2>
            </div>

            <Button className="" preSVG={true} svg={CallingPhoneSVG}>
              Book a Call
            </Button>
          </div>
        </div>
      </section>
      <div>
        <section className=" bg-transparent ">
          <div className="container px-36 lg:px-8 py-4 md:py-8  mx-auto lg:-mt-14 absolute">
            <div className="flex md:flex-wrap -m-4 text-center justify-between ">
              <div className=" w-[257px] h-[149px] lg:w-[200px] lg:h-[110px] border-2 border-gray-200 px-6  py-12 lg:py-8 lg:px-4 rounded-lg bg-white relative md:w-[137px] md:h-[89px]">
                <div className="h-[78px] w-[78px]  lg:h-[60px] lg:w-[60px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <PersonsSVG />
                </div>
                <h2 className="title-font font-bold text-3xl md:text-xl md:font-semibold text-gray-900">
                  100+
                </h2>
                <p className="leading-6 text-xl font-medium lg:text-lg md:text-xs">
                  Developers
                </p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12 rounded-lg bg-white relative w-[257px] h-[149px] lg:w-[200px] lg:h-[110px] lg:py-8 lg:px-4 md:w-[137px] md:h-[89px] ">
                <div className="h-[78px] w-[78px]  lg:h-[60px] lg:w-[60px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <CompassSVG />
                </div>
                <h2 className="title-font font-bold  text-3xl text-gray-900 md:text-xl md:font-semibold">
                  2K+
                </h2>
                <p className="leading-6 text-xl font-medium lg:text-lg md:text-xs">
                  Customers Served
                </p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12  rounded-lg bg-white relative w-[257px] h-[149px] lg:w-[200px] lg:h-[110px] lg:py-8 lg:px-4 md:w-[137px] md:h-[89px] ">
                <div className="h-[78px] w-[78px] lg:h-[60px] lg:w-[60px] rounded-full border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <WorldSVG />
                </div>
                <h2 className="title-font font-bold  text-3xl text-gray-900 md:text-xl md:font-semibold">
                  500+
                </h2>
                <p className="leading-6 text-xl lg:text-lg font-medium md:text-xs">
                  Global Clients
                </p>
              </div>

              <div className="border-2 border-gray-200 px-6 py-12 rounded-lg relative bg-white w-[257px] h-[149px] lg:w-[200px] lg:h-[110px] lg:py-8 lg:px-4 md:w-[137px] md:h-[89px] ">
                <div className="h-[78px] w-[78px] lg:h-[60px] lg:w-[60px] rounded-full  border-[6px] border-main flex justify-center items-center absolute ml-auto mr-auto left-0 right-0 -top-10  bg-white">
                  <BuildingSVG />
                </div>
                <h2 className="title-font font-bold  text-3xl text-gray-900 md:text-xl md:font-semibold">
                  8
                </h2>
                <p className=" leading-6 text-xl font-medium lg:text-lg md:text-xs">
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
