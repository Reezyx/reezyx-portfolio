import { Button } from "antd";
import React from "react";

function ProjectCard({ item }) {
  return (
    <a
      className="hover:bg-gray-300 hover:duration-500 shadow-xl p-4 rounded-xl flex flex-col"
      href={item.link}
      target="_blank"
    >
      <img className="mx-auto w-2/3" src={item.img} alt="" />
      <p className="xl:text-2xl md:text-xl font-bold text-center text-gray-800">
        {item.title}
      </p>
      <p className="my-3 xl:text-xl text-center">{item.position}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {item.stack.map((stack) => {
          return <div className="py-1 px-2 rounded-xl bg-type-string xl:text-sm md:text-xs text-black font-medium">{stack}</div>;
        })}
      </div>
    </a>
  );
}

export default ProjectCard;
