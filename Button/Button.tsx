// import React, { useContext } from "react";
// import StateContext from "../Context/StateContext";
// import { btnInterface } from "../Interfaces/btnInterface";

// export const Button = ({ className = "", svg, children, preSVG }: btnInterface) => {
//   const { isLg, isTab, isMobile } = useContext(StateContext);
//   return (
//     <>
//       {preSVG ? (
//         <div
//           className={` ${
//             className ? `${className}` : "w-full flex justify-center items-center sm:my-2"
//           } `}
//         >
//           <div
//             className={`flex h-[54px] w-[185px] md:h-[34px] md:w-[118px] sm:rounded-full mb-3 bg-white rounded-4xl justify-center items-center cursor-pointer`}
//           >
//             <div className={`h-auto w-auto flex justify-center items-center`}>
//               {svg
//                 ? svg({
//                     ...(isLg
//                       ? { height: "24", width: "40" }
//                       : isTab
//                       ? { height: "12", width: "20" }
//                       : isMobile
//                       ? { height: "16", width: "16" }
//                       : { height: "24", width: "40" })
//                   })
//                 : ""}
//             </div>
//             <span className="text-main text-base font-semibold font-poppins  flex items-center md:text-xs md:font-semibold ml-2">
//               {children}
//             </span>
//           </div>
//         </div>
//       ) : (
//         <div
//           className={` ${
//             className ? `${className}` : "w-full flex justify-center items-center sm:my-2"
//           } `}
//         >
//           <div className="flex h-[54px] w-[230px]  md:w-[150px] md:h-[34px] sm:rounded-full mb-3 bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer">
//             <span
//               className={`text-white text-base font-semibold font-poppins  flex items-center md:text-xs md:font-semibold`}
//             >
//               {children}
//             </span>
//             <div className="h-auto w-auto flex justify-center items-center ml-2">
//               {svg
//                 ? svg({
//                     ...(isLg
//                       ? { height: "24", width: "24" }
//                       : isTab
//                       ? { height: "16", width: "16" }
//                       : isMobile
//                       ? { height: "16", width: "16" }
//                       : { height: "24", width: "24" })
//                   })
//                 : ""}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

import React, { useContext } from "react";
import StateContext from "../Context/StateContext";
import { btnInterface } from "../Interfaces/btnInterface";

export const Button = ({ className = "", svg, children, preSVG }: btnInterface) => {
  const { isLg, isTab, isMobile } = useContext(StateContext);
  return (
    <>
      {preSVG ? (
        <div className={` ${className ? className : ""} `}>
          <div className={`h-auto w-auto flex items-center`}>
            {svg
              ? svg({
                  ...(isLg
                    ? { height: "24", width: "40" }
                    : isTab
                    ? { height: "12", width: "20" }
                    : isMobile
                    ? { height: "16", width: "16" }
                    : { height: "24", width: "40" })
                })
              : ""}
          </div>

          <span className="text-main text-base font-semibold font-poppins flex items-center md:text-xs md:font-semibold ml-2">
            {children}
          </span>
        </div>
      ) : (
        // <div className="flex h-[54px] w-[230px]  md:w-[150px] md:h-[34px] sm:rounded-full mb-3 bg-gradient-to-r from-gradient1 to-gradient2 text-white rounded-4xl justify-center items-center cursor-pointer">
        <div className={` ${className ? className : ""}`}>
          <span
            className={`text-white text-base font-semibold font-poppins flex items-center md:text-xs md:font-semibold`}
          >
            {children}
          </span>
          <div className="h-auto w-auto flex justify-center items-center ml-2">
            {svg
              ? svg({
                  ...(isLg
                    ? { height: "24", width: "24" }
                    : isTab
                    ? { height: "16", width: "16" }
                    : isMobile
                    ? { height: "16", width: "16" }
                    : { height: "24", width: "24" })
                })
              : ""}
          </div>
        </div>
      )}
    </>
  );
};
