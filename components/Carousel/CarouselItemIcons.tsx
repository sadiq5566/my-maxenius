import Link from "next/link";
import React from "react";

const CarouselItemIcons = ({ item, limit }: { item: Number; limit: Number }) => {
  return (
    <div className="absolute px-32 xl:px-28 lg:px-28 md:px-2  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link
        href={`/services#slide${
          (Number(item) % (Number(limit) + 1)) - 1 === 0
            ? 3
            : (Number(item) % (Number(limit) + 1)) - 1
        }`}
      >
        <a className="btn btn-circle">❮</a>
      </Link>
      <Link href={`#slide${(Number(item) % Number(limit)) + 1}`}>
        <a className="btn btn-circle">❯</a>
      </Link>
    </div>
  );
};

export default CarouselItemIcons;
