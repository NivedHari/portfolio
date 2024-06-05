import React from "react";
import SkillCard from "./SkillCard";
import { skillData } from "../Data/SkillData";

export default function Skills() {
  return (
    <div className="text-white text-center mt-20 text-3xl md:text-5xl max-w-6xl mx-auto w-full min-h-screen">
      <h1 className="mb-20 font-bold text-5xl md:text-6xl ">My Skills</h1>
      <div className="flex gap-8 justify-center flex-wrap mb-20">
        {skillData.map((skill) => (
          <SkillCard key={skill.id} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
