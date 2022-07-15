import React from "react";
import project1 from "../../public/assets/images/uil.png";
import project2 from "../../public/assets/images/b.png";
import project3 from "../../public/assets/images/elo.png";
import project4 from "../../public/assets/images/in.png";
import project5 from "../../public/assets/images/me.png";
import project6 from "../../public/assets/images/pizza.png";
import ImageWrapper from "./ImageWrapper";
export const Projects = () => {
  return (
    <div className="w-full h-[138px] bg-white flex justify-around items-center space-x-4  md:space-x-2">
      <ImageWrapper
        src={project1.src}
        alt="United Industries Limiteds"
        width="85"
        height="50"
        imgHeight={project1.height}
        imgWidth={project1.width}
      />

      <ImageWrapper
        src={project2.src}
        alt="Fatory Outlet Bazar"
        width="67"
        height="70"
        imgHeight={project2.height}
        imgWidth={project2.width}
      />

      <ImageWrapper
        src={project3.src}
        alt="elo"
        width="125"
        height="50"
        imgHeight={project3.height}
        imgWidth={project3.width}
      />

      <ImageWrapper
        src={project4.src}
        alt="inteero"
        width="248"
        height="50"
        imgHeight={project4.height}
        imgWidth={project4.width}
      />

      <ImageWrapper
        src={project5.src}
        alt="Mediacom"
        width="153"
        height="42"
        imgHeight={project3.height}
        imgWidth={project3.width}
      />
      <ImageWrapper
        src={project6.src}
        alt="Pizza Hut"
        width="167"
        height="50"
        imgHeight={project6.height}
        imgWidth={project6.width}
      />
    </div>
  );
};
