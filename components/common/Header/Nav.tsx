import Link from "next/link";
import React from "react";
import SearchSVG from "../../../public/assets/svgs/searchSVG";

const Nav = () => {
  return (
    <nav className="ml-auto flex flex-wrap items-center text-base justify-center space-x-9 md:mx-auto md:mt-6 sm:mt-0 sm:mr-0 sm:non">
      <Link href="/">
        <a className="header-anchor">Home</a>
      </Link>
      <Link href="/ourwork">
        <a className="header-anchor">Our Work</a>
      </Link>
      <Link href="#">
        <a className="header-anchor">About Us!</a>
      </Link>
      <Link href="/services">
        <a className="header-anchor">Ecommerce Guide</a>
      </Link>
      <Link href="#">
        <a className="header-anchor">Contact Us</a>
      </Link>
      <Link href="#">
        <a className="mr-5 ">
          <div className="w-[24px] h-[24px] flex justify-center items-center">
            <SearchSVG />
          </div>
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
