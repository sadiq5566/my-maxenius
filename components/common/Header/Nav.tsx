import React from "react";
import SearchSVG from "../../../public/assets/svgs/searchSVG";
import ActiveLink from "./ActiveLink";

const Nav = () => {
  return (
    <nav className="ml-auto flex flex-wrap items-center text-base justify-center space-x-9 md:mx-auto md:mt-6 sm:mt-0 sm:mr-0 sm:non">
      <style jsx>{`
        .active {
          font-weight: bold;
          opacity: 1;
        }
      `}</style>

      <ActiveLink activeClassName="active" href="/">
        <a className="header-anchor">Home</a>
      </ActiveLink>

      <ActiveLink activeClassName="active" href="/ourwork">
        <a className="header-anchor">Our Work</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="#">
        <a className="header-anchor">About Us!</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/services">
        <a className="header-anchor">Ecommerce Guide</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="#">
        <a className="header-anchor">Contact Us</a>
      </ActiveLink>
      <a className="mr-5 ">
        <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer">
          <SearchSVG />
        </div>
      </a>
    </nav>
  );
};

export default Nav;
