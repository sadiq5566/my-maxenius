import React from "react";
import { svgInterface } from "../../../Interfaces/svgInterface";

const MainArrowStraightSVG = (props: svgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.75 11.7256H4.75"
        stroke="#CF142B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
        stroke="#CF132A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MainArrowStraightSVG;
