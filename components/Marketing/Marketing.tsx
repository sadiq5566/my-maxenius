// import React from "react";
// import { marketingData } from "../../data/Marketing";
// import MarketingServicesSvg from "../../public/assets/svgs/MarketingServicesSvg";
// export const Marketing = () => {
//   return (
//     <section className="w-full h-[944px] sm:h-auto bg-serviceBg">
//       <div className="container px-16 py-24 mx-auto ">
//         <div className="flex flex-col text-center sm:text-left w-full mb-20">
//           <div className="flex">
//             <h1 className="text-4xl sm:text-7xl sm:font-semibold sm:tracking-widest font-poppins font-normal leading-[48px] text-black not-italic">
//               Get rid of the Marketing Services section
//               <span className="ml-10 sm:h-auto ">
//                 <MarketingServicesSvg />
//               </span>
//             </h1>
//           </div>
//           <p className=" font-Lato w-[1117px] sm:w-full sm:text-4xl sm:tracking-wider sm:mt-8 sm:leading-[1.6] text-justify text-xl font-medium text-pColor leading-9 not-italic mt-5">
//             While our core business has always been software development, we also help our
//             clients scale up their marketing efforts when they need professional marketing
//             assistance.
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-around sm:w-full sm:h-auto sm:px-8">
//           {marketingData.map((data) => (
//             <div
//               className={`pl-3 pr-8 pt-8 h-[242px] w-1/2  sm:w-full sm:h-auto sm:my-6 ${
//                 data.id == 2
//                   ? "border-main bg-white border-b-4 r shadow-service"
//                   : "bg-serviceBg"
//               }
//                ${data.id > 2 ? "mt-12" : "mt-6"}`}
//               key={`${data.id}`}
//             >
//               <div className=" pt-2 px-8 flex flex-col justify-around h-full ">
//                 <div className="mb-4 sm:h-[50] sm:w-[50] sm:my-6">{data.svg({})}</div>
//                 <h2 className="sm:text-5xl  sm:font-semibold sm:my-2 text-2xl font-poppins font-normal leading-9 text-black not-italic">
//                   {data.title}
//                 </h2>

//                 <p className="sm:text-4xl sm:my-3  sm:tracking-widest sm:leading-[1.6] font-Lato w-auto sm:w-full text-justify text-xl font-medium text-pColor leading-[30px] not-italic pb-8">
//                   {data.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import React from "react";
import { marketingData } from "../../data/Marketing";
import MarketingServicesSvg from "../../public/assets/svgs/MarketingServicesSvg";
export const Marketing = () => {
  return (
    <section className="w-full h-[944px] md:h-auto  bg-serviceBg">
      <div className="container px-16 py-24  mx-auto ">
        <div className="flex flex-col text-center sm:text-left w-full mb-20 md:mb-8">
          <div className="flex">
            <h1 className="text-4xl font-poppins font-normal leading-[48px] text-black not-italic md:text-[22px] md:font-normal md:leading-[30px]">
              Get rid of the Marketing Services section
              <span className="ml-10 sm:h-auto ">
                <MarketingServicesSvg />
              </span>
            </h1>
          </div>
          <p className=" font-Lato w-auto md:w-full md:text-xs md:font-medium md:mt-4 md:leading-5 text-justify text-xl font-medium text-pColor leading-9 not-italic mt-5">
            While our core business has always been software development, we also help our
            clients scale up their marketing efforts when they need professional marketing
            assistance.
          </p>
        </div>
        <div className="flex flex-wrap justify-around sm:w-full sm:h-auto sm:px-8">
          {marketingData.map((data) => (
            <div
              className={`pl-3 pr-8 pt-8 h-[242px] md:h-auto w-1/2 sm:w-full sm:h-auto sm:my-6 ${
                data.id == 2
                  ? "border-main bg-white border-b-4 r shadow-service"
                  : "bg-serviceBg"
              }
               ${data.id > 2 ? "mt-12" : "mt-6"}`}
              key={`${data.id}`}
            >
              <div className=" pt-2 px-8 md:px-4 flex flex-col justify-around h-full ">
                <div className="mb-4 md:h-auto md:w-auto md:my-0">{data.svg({})}</div>
                <h2 className="md:text-base  md:font-normal md:my-2 md:leading-6 text-2xl font-poppins font-normal leading-9 text-black not-italic">
                  {data.title}
                </h2>

                <p className="md:text-xs md:my-1 md:leading-5 md:font-medium font-Lato w-auto md:w-full text-justify text-xl font-medium text-pColor leading-[30px] not-italic pb-8 md:pb-4">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
