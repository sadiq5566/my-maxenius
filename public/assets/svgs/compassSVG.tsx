import React from "react";
import { svgInterface } from "../../../Interfaces/svgInterface";

const CompassSVG = (props: svgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={`0 0 40 40`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M36.6665 19.9997C36.6665 29.2047 29.2048 36.6663 19.9998 36.6663C10.7948 36.6663 3.33313 29.2047 3.33313 19.9997C3.33313 10.7963 10.7948 3.33301 19.9998 3.33301C29.2048 3.33301 36.6665 10.7963 36.6665 19.9997Z"
        fill="#E11C34"
      />
      <path
        d="M26.433 14.5079L23.733 23.0412C23.633 23.3912 23.3497 23.6745 22.9997 23.7762L14.4997 26.4412C13.933 26.6262 13.383 26.0745 13.5663 25.5079L16.233 16.9579C16.333 16.6079 16.6163 16.3412 16.9663 16.2245L25.4997 13.5579C26.083 13.3745 26.6163 13.9245 26.433 14.5079Z"
        fill="#E11C34"
      />
    </svg>
  );
};

export default CompassSVG;
