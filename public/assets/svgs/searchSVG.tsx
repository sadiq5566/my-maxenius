import React from "react";
import { svgInterface } from "../../../Interfaces/svgInterface";

const SearchSVG = (props: svgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6832 4.86746C8.021 4.86746 5.05221 7.83625 5.05221 11.4984C5.05221 15.1606 8.021 18.1294 11.6832 18.1294C15.3454 18.1294 18.3141 15.1606 18.3141 11.4984C18.3141 7.83625 15.3454 4.86746 11.6832 4.86746ZM3.84491 11.4984C3.84491 7.16947 7.35422 3.66016 11.6832 3.66016C16.0121 3.66016 19.5215 7.16947 19.5215 11.4984C19.5215 15.8274 16.0121 19.3367 11.6832 19.3367C7.35422 19.3367 3.84491 15.8274 3.84491 11.4984Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2876 16.4797C16.523 16.2436 16.9052 16.2431 17.1413 16.4786L19.9777 19.3076C20.2137 19.543 20.2142 19.9252 19.9788 20.1613C19.7434 20.3973 19.3611 20.3978 19.1251 20.1624L16.2887 17.3334C16.0527 17.0979 16.0522 16.7157 16.2876 16.4797Z"
        fill="white"
      />
    </svg>
  );
};

export default SearchSVG;
