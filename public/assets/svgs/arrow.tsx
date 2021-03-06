import React from "react";
import { svgInterface } from "../../../Interfaces/svgInterface";

const Arrow = (props: svgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={`0 0 40 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.7009 1.7L32.5809 4.58L22.8209 14.34L16.2409 7.76C15.4609 6.98 14.2009 6.98 13.4209 7.76L1.42094 19.78C0.640937 20.56 0.640937 21.82 1.42094 22.6C2.20094 23.38 3.46094 23.38 4.24094 22.6L14.8209 12L21.4009 18.58C22.1809 19.36 23.4409 19.36 24.2209 18.58L35.4009 7.42L38.2809 10.3C38.9009 10.92 39.9809 10.48 39.9809 9.6V1C40.0009 0.44 39.5609 0 39.0009 0H30.4209C29.5209 0 29.0809 1.08 29.7009 1.7Z"
        fill="white"
      />
    </svg>
  );
};

export default Arrow;
