import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { animated, config, useSpring } from "@react-spring/web";

function Home() {
  const style = useSpring({
    from: {
      opacity: 0,
      x: "-8%",
    },
    to: {
      opacity: 1,
      x: "0%",
    },
    config: {
      duration: 500,
    },
  });
  const projects = [
    {
      img: "/image/sihris.png",
      title: "SiHRIS",
      position: "Fullstack Developer | Tech Lead",
      link: "https://sihris.id",
      stack: ["ReactJS", "Vite", "Tailwind", "Ant Design", "Laravel", "MySQL"],
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
      img: "/image/berbagilink-logo.png",
      title: "Berbagilink",
      position: "Fullstack Developer",
      link: "https://berbagi.link",
      stack: ["Reactjs", "Bootstrap", "Laravel", "JQuery", "MySQL"],
    },
  ];

  return (
    <>
      {/* WEB VIEW*/}
      <div className="mt-8 md:block hidden">
        <section className="bg-gray-300">
          <div className="md:grid grid-cols-6 items-center w-10/12 mx-auto py-5">
            <animated.div style={style} className="col-span-3 md:mt-12">
              <p className="text-gray-800 xl:text-3xl md:text-xl xl:py-1 md:py-1">
                Hello Everyone, I am
              </p>
              <p className="text-gray-900 xl:text-4xl md:text-xl lg:text-3xl font-bold xl:py-1 md:py-1">
                Rudiansyah Wijaya Pratama
              </p>
              <div className="flex gap-3 xl:text-4xl md:text-xl lg:text-2xl xl:py-1">
                <p>I'm a</p>
                <div className="font-bold text-type-string">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Fullstack Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Laravel Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Curriculum Developer")
                        .pauseFor(2000)
                        .start();
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full xl:gap-8 md:gap-4 items-center xl:mt-3 md:mt-2">
                <a
                  href="https://www.instagram.com/rudiansyahtama/"
                  target="_blank"
                  className="text-gray-800 hover:text-nav hover:duration-500 md:w-8 xl:w-12"
                >
                  <IconBrandInstagram className="w-full h-full" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rudiansyah-wijaya-pratama-95259a17b/"
                  target="_blank"
                  className="text-gray-800 hover:text-nav hover:duration-500 md:w-8 xl:w-12"
                >
                  <IconBrandLinkedin className="w-full h-full" />
                </a>
                <a
                  href="https://web.facebook.com/kpbut/"
                  target="_blank"
                  className="text-gray-800 hover:text-nav hover:duration-500 md:w-8 xl:w-10"
                >
                  <IconBrandFacebook className="w-full h-full" />
                </a>
                <a
                  href="https://github.com/Reezyx"
                  target="_blank"
                  className="text-gray-800 hover:text-nav hover:duration-500 md:w-8 xl:w-10"
                >
                  <IconBrandGithub className="w-full h-full" />
                </a>
                <a
                  href="https://gitlab.com/Reezyx"
                  target="_blank"
                  className="text-gray-800 hover:text-nav hover:duration-500 md:w-8 xl:w-10"
                >
                  <IconBrandGitlab className="w-full h-full" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCl8_KnHAHb4ndaZQk4ocbtQ"
                  target="_blank"
                  className="text-gray-800 hover:text-nav hover:duration-500 md:w-8 xl:w-12"
                >
                  <IconBrandYoutube className="w-full h-full" />
                </a>
              </div>
            </animated.div>
            <div className="col-span-3 text-right md:mt-28 md:mb-20">
              <img className="w-5/6" src="/image/raw1.png" alt="" />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="md:py-8">
            <p className="text-center xl:text-4xl md:text-2xl font-bold text-gray-600">
              My Recent Project
            </p>
            <div className="xl:w-24 md:w-20 border-0 xl:border-t-8 md:border-t-4 border-solid border-nav rounded-md mx-auto xl:mt-3 md:mt-2"></div>
            <section className="mx-5 my-8 grid xs:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 xl:grid-cols-4 gap-6">
              {projects.map((item) => {
                return <ProjectCard item={item} />;
              })}
            </section>
            <div className="flex">
              <Link
                className="mx-auto md:text-base xl:text-xl mt-2 font-bold bg-gray-800 hover:bg-type-string hover:duration-500 text-white px-5 py-3 rounded-2xl"
                to={"/project"}
              >
                See More..
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-300">
          <div className="md:py-10">
            <p className="text-center xl:text-4xl md:text-2xl font-bold text-gray-600">
              About Me
            </p>
            <div className="xl:w-24 md:w-20 border-0 xl:border-t-8 md:border-t-4 border-solid border-type-string rounded-md mx-auto xl:mt-3 md:mt-2"></div>
            <div className="grid grid-cols-6 mx-20">
              <div className="col-span-2 py-4 xl:mt-6">
                <img className="w-5/6" src="/image/raw2.png" alt="" />
              </div>
              <div className="col-span-4 flex">
                <p className="xl:text-2wxl font-semibold text-justify my-auto xl:ml-24 md:ml-12 text-gray-800">
                  I’m a fresh graduate in Computer Science from State University
                  of Jakarta, currently working as a Freelance Web Developer at
                  PT Amanah Karya Indonesia with over 2 years of experience in
                  building websites. I enjoy both front-end and back-end
                  development, and I’m always excited to learn new things,
                  experiment with new tools, and improve my skills.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* WEB VIEW*/}

      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <section className="bg-gray-300 mt-16 py-10">
          <img className="w-5/6 flex mx-auto" src="/image/raw1.png" alt="" />
          <p className="text-gray-900 text-3xl mt-3 py-3 text-center font-bold">
            Rudiansyah Wijaya Pratama
          </p>
          <div className="flex gap-2 text-2xl justify-center">
            <div className="font-bold text-type-string">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Backend Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Laravel Developer")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </div>
          </div>
          <div className="flex w-full gap-3 justify-center mt-3">
            <a
              href="https://www.instagram.com/rudiansyahtama/"
              target="_blank"
              className="text-gray-800 hover:text-nav hover:duration-500 w-10"
            >
              <IconBrandInstagram className="w-full h-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/rudiansyah-wijaya-pratama-95259a17b/"
              target="_blank"
              className="text-gray-800 hover:text-nav hover:duration-500 w-10"
            >
              <IconBrandLinkedin className="w-full h-full" />
            </a>
            <a
              href="https://web.facebook.com/kpbut/"
              target="_blank"
              className="text-gray-800 hover:text-nav hover:duration-500 w-8"
            >
              <IconBrandFacebook className="w-full h-full" />
            </a>
            <a
              href="https://github.com/Reezyx"
              target="_blank"
              className="text-gray-800 hover:text-nav hover:duration-500 w-8"
            >
              <IconBrandGithub className="w-full h-full" />
            </a>
            <a
              href="https://gitlab.com/Reezyx"
              target="_blank"
              className="text-gray-800 hover:text-nav hover:duration-500 w-8"
            >
              <IconBrandGitlab className="w-full h-full" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCl8_KnHAHb4ndaZQk4ocbtQ"
              target="_blank"
              className="text-gray-800 hover:text-nav hover:duration-500 w-10"
            >
              <IconBrandYoutube className="w-full h-full" />
            </a>
          </div>
        </section>

        <section className="bg-white">
          <div className="mt-4">
            <p className="text-center text-2xl font-bold text-gray-600">
              My Recent Project
            </p>
            <div className="w-16 mt-2 border-0 border-t-4 md:border-t-4 border-solid border-nav rounded-md mx-auto"></div>
            <section className="mx-5 py-5 grid grid-cols-2 gap-6">
              {projects.map((item) => {
                return <ProjectCard item={item} />;
              })}
            </section>
            <div className="flex">
              <Link
                className="mx-auto mb-3 font-bold bg-gray-800 hover:bg-type-string hover:duration-500 text-white px-3 py-1 rounded-xl"
                to={"/project"}
              >
                See More..
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-300">
          <div className="mt-3 py-5">
            <p className="text-center text-2xl font-bold text-gray-600">
              About Me
            </p>
            <div className="w-16 mt-2 border-0 border-t-4 md:border-t-4 border-solid border-nav rounded-md mx-auto"></div>
            <img
              className="w-4/6 flex mx-auto py-8"
              src="/image/raw2.png"
              alt=""
            />
            <div className="col-span-4 flex">
              <p className="px-8 text-base font-medium py-2 text-justify  text-gray-800">
                I am a Final Year Computer Science Student in State University
                of Jakarta also a Backend Developer Intern at PT Amanah Karya
                Indonesia who have more than 1 year working experience in there.
                I have interest in Website Development both Back-End or
                Front-End Programming and until today I'm still learn about that
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
    </>
  );
}

export default Home;
