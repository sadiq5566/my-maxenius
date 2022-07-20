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
