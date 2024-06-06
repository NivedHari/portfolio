import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ name, image, tech, git }) {
  return (
    <a
      href={git}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-gray-700 w-96 mx-auto p-5 pt-0 px-0 rounded-3xl hover:scale-105 transition-all duration-300 mt-5 hover:bg-gray-900 overflow-hidden" 
    >
      <div className="flex flex-col justify-center items-center ">
        <img src={image} className="w-96 h-50 rounded " />
        <h3 className="font-semibold ">{name}</h3>
        <p className="text-gray-400 text-sm">{tech}</p>
      </div>
    </a>
  );
}
