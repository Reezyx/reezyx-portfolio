import { Button } from "antd";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard({ item }) {
  return (
    <a
      className="hover:bg-gray-300 hover:duration-500 shadow-xl p-4 rounded-xl flex flex-col"
      href={item.link}
      target="_blank"
    >
      <img className="mx-auto w-2/3" src={item.img} alt="" />
      <p className="xl:text-2xl md:text-xl text-md font-bold text-center text-gray-800">
        {item.title}
      </p>
      <p className="xl:my-3 md:my-1 xl:text-xl md:py-0 py-1 md:text-sm lg:text-base text-xs text-center">
        {item.position}
      </p>
      <div className="flex flex-wrap gap-1 md:gap-3 md:my-1 justify-center">
        {item.stack.map((stack) => {
          return (
            <div className="py-1 px-2 rounded-xl bg-type-string xl:text-sm md:text-xs text-sxs text-black font-medium">
              {stack}
            </div>
          );
        })}
      </div>
    </a>
  );
}

export default ProjectCard;
