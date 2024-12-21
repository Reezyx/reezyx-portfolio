import React from "react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Typewriter from "typewriter-effect";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

function Project() {
  const style = useSpring({
    from: {
      opacity: 0,
      y: "-10%",
    },
    to: {
      opacity: 1,
      y: "0%",
    },
    config: {
      duration: 500,
    },
  });
  const projects = [
    {
      img: "/image/bisaabsen.png",
      title: "BisaAbsen",
      position: "Fullstack Developer",
      link: "https://hrisamanah.com",
      stack: ["ReactJS", "Vite", "Tailwind", "Ant Design", "Laravel", "MySQL"],
    },
    {
      img: "/image/jokerhub.png",
      title: "Jokerhub",
      position: "Frontend Developer",
      link: "https://jokerhub.netlify.app",
      stack: ["ReactJS", "Vite", "Tailwind", "Ant Design"],
    },
    {
      img: "/image/report-logo.png",
      title: "Reezyx Portfolio",
      position: "Frontend Developer",
      link: "https://reezyx.netlify.app",
      stack: ["ReactJS", "TailwindCSS"],
    },
    {
      img: "/image/amandemy-logo.png",
      title: "Amanah Academy",
      position: "Backend Developer",
      link: "https://amandemy.co.id",
      stack: ["ReactJS", "NextJS", "TailwindCSS", "Laravel", "MySQL"],
    },
    {
      img: "/image/lokalingo-logo.png",
      title: "Lokalingo",
      position: "Backend Developer",
      link: "https://lokalingo.fun",
      stack: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      img: "/image/berbagilink-logo.png",
      title: "Berbagilink",
      position: "Fullstack Developer",
      link: "https://berbagi.link",
      stack: ["Reactjs", "Bootstrap", "Laravel", "JQuery", "MySQL"],
    },
    {
      img: "/image/jualanku-logo.png",
      title: "Jualankulink",
      position: "Fullstack Developer",
      link: "https://jualanku.link",
      stack: ["Reactjs", "Bootstrap", "Laravel", "JQuery", "MySQL"],
    },
    {
      img: "/image/lostcode-logo.png",
      title: "Lostcode",
      position: "Backend Developer",
      link: "https://lostcode.id",
      stack: ["Laravel", "MySQL"],
    },
    {
      img: "/image/designforlife-logo.png",
      title: "Designforlife",
      position: "Fullstack Developer",
      link: "https://designforlife.id",
      stack: ["Bootstrap", "Laravel", "JQuery", "MySQL"],
    },
  ];

  return (
    <>
      {/* WEB VIEW*/}
      <div className="mt-4 md:block hidden">
        <section className="bg-white mx-24">
          <div className="xl:mt-28 md:mt-20">
            <p className="xl:text-4xl md:text-3xl text-center font-bold">
              Project Collection
            </p>
            <div className="xl:w-24 md:w-16 border-0 xl:border-t-8 md:border-t-4 border-solid border-nav rounded-md mx-auto xl:mt-3 md:mt-2"></div>

            <div className="mx-5 my-8 grid xs:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {projects.map((item) => {
                return (
                  <animated.div style={style} className={"flex"}>
                    <ProjectCard item={item} />
                  </animated.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      {/* WEB VIEW*/}

      {/* MOBILE VIEW */}
      <div className="mt-20 py-5 md:hidden">
        <section className="bg-white mx-5">
          <div className="">
            <p className="text-2xl text-center font-bold">Project Collection</p>
            <div className="w-16 mt-2 border-0 border-t-4 border-solid border-nav rounded-md mx-auto"></div>
            <div className="my-3 grid grid-cols-2 gap-3">
              {projects.map((item) => {
                return <ProjectCard item={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
    </>
  );
}

export default Project;
