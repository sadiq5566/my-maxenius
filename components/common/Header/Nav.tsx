import React, { useContext } from "react";
import StateContext from "../../../Context/StateContext";
import SearchSVG from "../../../public/assets/svgs/searchSVG";
import ActiveLink from "./ActiveLink";

const Nav = () => {
  const { isLg, isTab, isMobile } = useContext(StateContext);
  return (
    <nav className="ml-auto flex flex-wrap items-center text-base justify-center space-x-9  lg:mx-auto lg:mt-6 sm:mx-0 sm:space-x-3 sm:mt-0 sm:mr-0 sm:none">
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
        <div className="w-auto h-auto flex justify-center items-center cursor-pointer">
          <SearchSVG
            {...(isLg
              ? { height: "24", width: "24" }
              : isTab
              ? { height: "24", width: "24" }
              : isMobile
              ? { height: "24", width: "24" }
              : { height: "24", width: "24" })}
          />
        </div>
      </a>
    </nav>
  );
};

export default Nav;
