// import React from "react";
// import MainArrowStraightSVG from "../../public/assets/svgs/MainArrowStraightSVG";

// import { SingleBlogData } from "./SingleBlogData";
// export const Carousel = () => {
//   return (
//     <div className="w-full h-auto bg-main">
//       <div className="p-24 flex justify-between">
//         <div>
//           <h3 className="font-poppins font-normal text-4xl text-white">Case Studies</h3>
//         </div>
//         <div className="flex h-[54px] w-[178px] sm:h-[100px] sm:w-[250px] sm:rounded-full mb-3  bg-white  rounded-4xl justify-center items-center cursor-pointer">
//           <span className="text-main text-base leading-4 font-bold sm:text-2xl sm:font-bold font-poppins">
//             View More
//           </span>
//           <div className="h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]  ml-2 flex justify-center items-center">
//             <MainArrowStraightSVG />
//           </div>
//         </div>
//       </div>

//       <div className="carousel w-full h-auto bg-transparent pb-32">
//         <div id="slide1" className="carousel-item relative w-full ">
//           <SingleBlogData item={1} />
//         </div>
//         <div id="slide2" className="carousel-item relative w-full">
//           <SingleBlogData item={2} />
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <SingleBlogData item={3} />
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import MainArrowStraightSVG from "../../public/assets/svgs/MainArrowStraightSVG";

import { SingleBlogData } from "./SingleBlogData";
export const Carousel = () => {
  return (
    <div className="w-full h-auto bg-main">
      <div className="p-24 md:px-8 flex justify-between">
        <div>
          <h3 className="font-poppins font-normal text-4xl lg:text-3xl md:text-[22px] md:leading-[30px] md:font-normal text-white">
            Case Studies
          </h3>
        </div>
        <div className="flex h-[54px] w-[178px] sm:h-[100px] sm:w-[250px] sm:rounded-full mb-3  bg-white  rounded-4xl justify-center items-center cursor-pointer md:hidden">
          <span className="text-main text-base leading-4 font-bold sm:text-2xl sm:font-bold font-poppins">
            View More
          </span>
          <div className="h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]  ml-2 flex justify-center items-center">
            <MainArrowStraightSVG />
          </div>
        </div>
      </div>

      <div className="carousel w-full h-auto bg-transparent pb-32">
        <div id="slide1" className="carousel-item relative w-full ">
          <SingleBlogData item={1} />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <SingleBlogData item={2} />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <SingleBlogData item={3} />
        </div>
      </div>
    </div>
  );
};
