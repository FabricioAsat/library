import logo from "../assets/logo.svg";
import hamb from "../assets/hamb.svg";
import close from "../assets/close.svg";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full px-5 transition-all duration-300 ease-in-out lg:h-screen lg:flex-col lg:max-w-80 lg:px-0 lg:bg-neutral-100">
      <picture className="flex items-center h-16 gap-3 lg:pt-10">
        <i className="text-3xl font-bold">Library</i>
        <img src={logo} alt="logo" className="h-10 lg:h-8" />
      </picture>
      <div className="flex items-center lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? close : hamb} alt="hamb-button" className="h-10" />
        </button>
      </div>

      <div
        className={`fixed lg:relative w-full h-full bg-neutral-100 top-16 max-w-96 lg:max-w-80 lg:top-0 ${
          isOpen ? "left-0" : "-left-full lg:left-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 pt-10 text-xl font-semibold">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className={({ isActive }) =>
              (isActive ? "bg-white italic " : "") +
              "py-2 hover:bg-white text-center w-full transition-colors duration-200 ease-in"
            }
          >
            Library
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/additem"
            className={({ isActive }) =>
              (isActive ? "bg-white italic " : "") +
              "py-2 hover:bg-white text-center w-full transition-colors duration-200 ease-in"
            }
          >
            Add item
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/addcollection"
            className={({ isActive }) =>
              (isActive ? "bg-white italic " : "") +
              "py-2 hover:bg-white text-center w-full transition-colors duration-200 ease-in"
            }
          >
            Add collection
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
