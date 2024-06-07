import { Button } from "flowbite-react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

export default function ProjectCard({ name, image, tech, git, live }) {
  return (
    <div className="w-full flex flex-col items-center my-5">
      <div className="border-2 border-gray-700 bg-gray-950 mx-auto p-5 pt-0 px-0 rounded-lg hover:shadow-gray-800 hover:shadow-2xl transition-all duration-300 mt-5 hover:scale-105 overflow-hidden sm:h-[400px] sm:w-[600px]">
        <div className="flex flex-col justify-center items-center ">
          <img src={image} className="w-96 h-50 rounded sm:w-[600px]" />
          <h3 className="font-semibold mt-3">{name}</h3>
          <p className="text-gray-400 text-sm">{tech}</p>
        </div>
      </div>
      <div className=" mx-auto flex justify-start w-[600px] items-center gap-4 px-3 ">
        {git && (
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xl m:text-3xl bg-white text-black p-2 rounded-lg hover:scale-110 active:bg-slate-300 transition-all duration-200 flex flex-row items-center cursor-pointer"
          >
            <FaGithub />
            <span className="hidden md:inline md:text-sm mx-2">GitHub</span>
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="mt-4 text-xl m:text-3xl bg-white text-black p-2 rounded-lg hover:scale-110 active:bg-slate-300 transition-all duration-200 flex flex-row items-center cursor-pointer">
            <GoLinkExternal />
            <span className="hidden md:inline md:text-sm mx-2">Live link</span>
          </a>
        )}
      </div>
    </div>
  );
}
