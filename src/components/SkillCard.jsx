import React from "react";

export default function SkillCard({ icon, name }) {
  return (
    <div>
      <div className="flex flex-col p-2 justify-center items-center border-2 border-gray-500 w-36 rounded-3xl bg-gray-950 hover:bg-gray-900 transition-all duration-300 hover:scale-105">
        <img src={icon} className="h-20 w-15 p-2" />
        <h3 className="text-lg">{name}</h3>
      </div>
    </div>
  );
}
