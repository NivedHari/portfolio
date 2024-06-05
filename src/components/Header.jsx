import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  let Links = [
    { name: "About", link: '#about' },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 border-b border-gray-700 font-poppins px-14 bg-black z-50">
      <div className="md:flex items-center justify-between  text-white py-4 md:px-10 px-7 z-50">
        {/* logo section */}
        <a href="#about" className="font-bold text-2xl cursor-pointer flex items-center gap-1 w-full">
          <img src={"/images/icon.svg"} width={150} height={100} />
        </a>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-17" : "top-[-490px]"
          }`}
        >
          {Links.map((link, i) => (
            <li key={i} className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-white-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
}
