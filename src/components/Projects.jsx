import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../Data/ProjectData";
import ReactSwipe from "react-swipe";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

export default function Projects() {
  const reactSwipeEl = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = ProjectData.length;

  useEffect(() => {
    const handleSwipe = () => {
      const newIndex = reactSwipeEl.current.getPos();
      setCurrentIndex(newIndex);
    };

    const reactSwipeNode = reactSwipeEl.current;
    if (reactSwipeNode) {
      reactSwipeNode.prev = (() => {
        const originalPrev = reactSwipeNode.prev;
        return function () {
          originalPrev.call(this);
          handleSwipe();
        };
      })();

      reactSwipeNode.next = (() => {
        const originalNext = reactSwipeNode.next;
        return function () {
          originalNext.call(this);
          handleSwipe();
        };
      })();
    }
  }, []);

  return (
    <div id="projects" className="text-white text-center mb-5 min-w-screen">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline">
        Projects
      </h1>

      <div className="flex flex-col items-center max-w-7xl mx-auto p-7 ">
        <ReactSwipe
          className="carousel w-full  "
          swipeOptions={{ continuous: false }}
          ref={reactSwipeEl}
        >
          {ProjectData.map((project, index) => (
            <div key={project.id} className="w-full flex justify-center ">
              <ProjectCard
                image={project.image}
                name={project.name}
                tech={project.tech}
                git={project.git}
                live={project.live}
              />
            </div>
          ))}
        </ReactSwipe>
        <div className="flex justify-end sm:w-[600px] p-3 gap-3 w-80 -mt-5">
          <button
            className={`text-xl m:text-3xl bg-white text-black p-2 rounded-lg hover:scale-110 active:bg-slate-300 transition-all duration-200 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => reactSwipeEl.current.prev()}
            disabled={currentIndex === 0}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`text-xl m:text-3xl bg-white text-black p-2 rounded-lg hover:scale-110 active:bg-slate-300 transition-all duration-200 ${
              currentIndex === totalItems - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => reactSwipeEl.current.next()}
            disabled={currentIndex === totalItems - 1}
            pill
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
