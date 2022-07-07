import React from "react";
import Image from "next/image";
import project1 from "../../public/assets/images/project1.png";
import project2 from "../../public/assets/images/project2.png";
import project3 from "../../public/assets/images/project3.png";
import project4 from "../../public/assets/images/project4.png";
import project5 from "../../public/assets/images/project5.png";
import project6 from "../../public/assets/images/project6.png";
import project7 from "../../public/assets/images/project7.png";
export const Projects = () => {
  return (
    <div className="w-full  h-[138px] bg-white flex justify-around items-center">
      <div className="w-[85] h-[50]">
        <Image alt="Project1 Image" src={project1} />
      </div>

      <div className="w-[67] h-[70]">
        <Image alt="Project1 Image" src={project2} />
      </div>

      <div className="w-[125] h-[50]">
        <Image alt="Project1 Image" src={project3} />
      </div>

      <div className="w-[248] h-[50]">
        <Image alt="Project1 Image" src={project4} />
      </div>

      <div className="w-[153] h-[42]">
        <Image alt="Project1 Image" src={project5} />
      </div>

      <div className="w-[167] h-[50]">
        <Image alt="Project1 Image" src={project6} />
      </div>

      <div className="w-[108] h-[50]">
        <Image alt="Project1 Image" src={project7} />
      </div>
    </div>
  );
};
