// import Image from "next/image";
// import React from "react";
// import { Button } from "../../Button";
// import { ourWorkBlogData } from "../../data/ourWorkBlog";
// import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";
// export const Blog = () => {
//   return (
//     <div className="w-full bg-serviceBg p-20">
//       {ourWorkBlogData.map((data) => {
//         return (
//           <section className="my-12 rounded-xl shadow-service" key={`${data.id}`}>
//             <div className="bg-white w-full h-[625px] p-12 sm:h-auto sm:px-2 sm:py-12">
//               <div className="items-center justify-center sm:flex hidden sm:w-full sm:mb-8">
//                 <Image
//                   className="object-cover object-center"
//                   alt="logo"
//                   width={190}
//                   height={48}
//                   src={`${data.logo}`}
//                   objectFit="contain"
//                 />
//               </div>
//               <div className=" flex flex-row rounded-xl  sm:flex-col ">
//                 <div className="w-3/5 flex flex-col items-start justify-around px-12  sm:text-left sm:w-full sm:items-center sm:order-2">
//                   {/* //////// logo.////  */}
//                   <div className="flex items-center justify-start sm:hidden">
//                     <Image
//                       className="object-cover object-center"
//                       alt="logo"
//                       width={174}
//                       height={48}
//                       src={`${data.logo}`}
//                       objectFit="contain"
//                     />
//                   </div>
//                   {/* //////// h1 heading.////  */}
//                   <div className="w-[479px] sm:w-full sm:mt-16">
//                     <h1 className="font-poppins text-4xl  font-normal text-black leading-[48px]">
//                       {data.title}

//                       {/* <br className="hidden lg:inline-block" /> */}
//                     </h1>
//                   </div>
//                   {/* //////// P tag description/// */}
//                   <div className="w-[559px] sm:w-full sm:mt-4">
//                     <p className="font-Lato font-medium text-xl leading-9 text-pColor text-justify">
//                       {data.description}
//                     </p>
//                   </div>
//                   {/* /////core technologies//// */}
//                   <div className="sm:w-full flex sm:justify-between sm:mt-4">
//                     <div className=" sm:flex sm:justify-between sm:flex-col sm:w-2/4">
//                       <div className="">
//                         <h3 className="font-Lato font-medium text-xl leading-9 text-black text-justify">
//                           Core Technologies:
//                         </h3>
//                         <ul className="flex list-disc pl-10 py-2 sm:flex-col mt-1">
//                           {data.technologies.map((tech, i) => {
//                             return (
//                               <li key={i} className="mr-12 text-main">
//                                 <p className="bg-clip-text text-transparent bg-gradient-to-r from-gradient1 to-gradient2 font-Lato font-medium text-xl leading-9 text-justify">
//                                   {tech}
//                                 </p>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       </div>

//                       {/* /////////Button/////// */}
//                       {/* <div className="w-full flex sm:my-12 mt-12">
//                         <div className="flex h-[54px] w-[230px] sm:h-[100px] sm:w-[350px] sm:rounded-full mb-3  bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer">
//                           <span className="text-white text-base leading-4 font-bold sm:text-2xl sm:font-bold font-poppins">
//                             View Case Study
//                           </span>
//                           <div className="h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]  ml-2 flex justify-center items-center">
//                             <StraightArrowWhiteSvg />
//                           </div>
//                         </div>
//                       </div> */}
//                       <Button
//                         className="w-full flex sm:my-12 mt-12"
//                         preSVG={false}
//                         svg={StraightArrowWhiteSvg}
//                       >
//                         View Case Study
//                       </Button>
//                     </div>
//                     {/* ////image //// */}
//                     <div className="w-2/5  sm:2/4 sm:block hidden sm:hidden">
//                       <Image
//                         className="object-cover object-center rounded"
//                         alt="hero"
//                         width={362}
//                         height={302}
//                         src={`${data.image}`}
//                         objectFit="contain"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-2/5 flex justify-center items-center sm:hidden sm:flex sm:w-full">
//                   <Image
//                     className="object-cover object-center rounded"
//                     alt="hero"
//                     width={362}
//                     height={302}
//                     src={`${data.image}`}
//                     objectFit="contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//         );
//       })}
//     </div>
//   );
// };
import Image from "next/image";
import React from "react";
import { Button } from "../../Button";
import { ourWorkBlogData } from "../../data/ourWorkBlog";
import StraightArrowWhiteSvg from "../../public/assets/svgs/StraightArrowWhiteSvg";
export const Blog = () => {
  return (
    <div className="w-full bg-serviceBg p-20 sm:py-4 sm:px-4">
      {ourWorkBlogData.map((data) => {
        return (
          <section className="my-12 rounded-xl shadow-service" key={`${data.id}`}>
            <div className="bg-white w-full h-[625px] md:h-auto p-12 md:px-0 md:py-12 sm:h-auto sm:px-0 sm:py-12 ">
              <div className="items-center justify-center sm:flex hidden sm:w-full sm:mb-8">
                <Image
                  className="object-cover object-center"
                  alt="logo"
                  width={190}
                  height={48}
                  src={`${data.logo}`}
                  objectFit="contain"
                />
              </div>
              <div className=" flex flex-row rounded-xl sm:flex-col ">
                <div className="w-3/5 flex flex-col items-start justify-around px-12  sm:text-left lg:w-full sm:items-center sm:order-2 xl:mr-24">
                  {/* //////// logo.////  */}
                  <div className="flex items-center justify-start sm:hidden">
                    <Image
                      className="object-cover object-center"
                      alt="logo"
                      width={174}
                      height={48}
                      src={`${data.logo}`}
                      objectFit="contain"
                    />
                  </div>
                  {/* //////// h1 heading.////  */}
                  <div className="w-[479px] lg:w-full sm:mt-16">
                    <h1 className="font-poppins text-4xl  lg:text-3xl lg:leading-[40px] md:text-base md:leading-6 md:font-normal font-normal text-black leading-[48px]">
                      {data.title}
                      {/* <br className="hidden lg:inline-block" /> */}
                    </h1>
                  </div>
                  {/* //////// P tag description/// */}
                  <div className="w-auto  lg:w-full sm:mt-4">
                    <p className="font-Lato font-medium text-xl leading-9 lg:text-lg lg:leading-7  md:text-xs md:leading-5 md:font-medium text-pColor text-justify">
                      {data.description}
                    </p>
                  </div>
                  {/* /////core technologies//// */}
                  <div className="lg:w-full flex lg:justify-between lg:mt-4 ">
                    <div className=" lg:flex lg:justify-between lg:flex-col lg:w-2/4">
                      <div className="w-auto">
                        <h3 className="font-Lato font-medium text-xl leading-9 lg:text-lg lg:leading-7  md:text-base md:leading-6 md:font-normal text-black text-justify">
                          Core Technologies:
                        </h3>
                        <ul className="flex list-disc pl-10 py-2 lg:flex-col mt-1">
                          {data.technologies.map((tech, i) => {
                            return (
                              <li key={i} className="mr-12 text-main sm:mr-0">
                                <p className="bg-clip-text text-transparent bg-gradient-to-r from-gradient1 to-gradient2 font-Lato font-medium text-xl  leading-9 lg:text-md lg:leading-7 md:text-xs md:leading-5 md:font-medium text-justify">
                                  {tech}
                                </p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* /////////Button/////// */}
                      {/* <div className="w-full flex sm:my-12 mt-12">
                        <div className="flex h-[54px] w-[230px] sm:h-[100px] sm:w-[350px] sm:rounded-full mb-3  bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer">
                          <span className="text-white text-base leading-4 font-bold sm:text-2xl sm:font-bold font-poppins">
                            View Case Study
                          </span>
                          <div className="h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]  ml-2 flex justify-center items-center">
                            <StraightArrowWhiteSvg />
                          </div>
                        </div>
                      </div> */}
                      <Button
                        className="w-full flex mt-12 md:w-[145px] md:h-[34px]"
                        preSVG={false}
                        svg={StraightArrowWhiteSvg}
                      >
                        View Case Study
                      </Button>
                    </div>
                    {/* ////image //// */}
                    <div className="w-2/5  lg:2/4 lg:block hidden sm:hidden">
                      <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        width={362}
                        height={302}
                        src={`${data.image}`}
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-2/5 flex justify-center items-center lg:hidden sm:flex sm:w-full">
                  <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    width={362}
                    height={302}
                    src={`${data.image}`}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
