import Image from "next/image";
import React from "react";
import { ImageWrapperInterface } from "../../Interfaces/ImageWrapperInterface";

const ImageWrapper = ({
  src,
  alt,
  width,
  height,
  className,
  imgHeight,
  imgWidth
}: ImageWrapperInterface) => {
  return (
    <div className={`w-[${width}] h-[${height}]   ${className} ? className : ""`}>
      <Image
        alt={`${alt}`}
        src={`${src}`}
        width={`${imgWidth}`}
        height={`${imgHeight}`}
      />
    </div>
  );
};

export default ImageWrapper;
