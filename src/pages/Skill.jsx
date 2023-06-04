import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";
import Typewriter from "typewriter-effect";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { animated, config, useSpring } from "@react-spring/web";
import ScrollAnimation from "react-animate-on-scroll";

function Skill() {
  const style = useSpring({
    from: {
      opacity: 0,
      y: "-15%",
    },
    to: {
      opacity: 1,
      y: "0%",
    },
    config: {
      duration: 500,
    },
  });
  const used = [
    { img: "/image/html.png" },
    { img: "/image/css.png" },
    { img: "/image/bootstrap.png" },
    { img: "/image/git.png" },
    { img: "/image/php.png" },
    { img: "/image/laravel.png" },
    { img: "/image/mysql.png" },
    { img: "/image/postman.png" },
  ];
  const learn = [
    { img: "/image/javascript.png" },
    { img: "/image/react.png" },
    { img: "/image/tailwind.png" },
    { img: "/image/golang.png" },
    { img: "/image/figma.png" },
    { img: "/image/redis.png" },
    { img: "/image/next.png" },
  ];
  return (
    <>
      {/* WEB VIEW*/}
      <div className="mt-8 md:block hidden">
        <section className="bg-white">
          <div className="md:mt-14 py-8 xl:mt-24">
            <p className="text-center xl:text-4xl md:text-3xl font-bold text-gray-600">
              Tools Used
            </p>
            <div className="xl:w-24 md:w-16 border-0 xl:border-t-8 md:border-t-4 border-solid border-nav rounded-md mx-auto xl:mt-3 md:mt-1"></div>
            <div className="flex flex-col justify-center gap-5">
              <animated.div
                style={style}
                className="xl:mt-10 md:mt-6 my-4 flex flex-wrap justify-center items-center gap-5 w-full"
              >
                {used.map((item) => {
                  return (
                    <img
                      className="xl:w-1/7 md:w-1/4 shadow-lg bg-gray-100 rounded-lg hover:scale-110 hover:duration-500"
                      src={item.img}
                    ></img>
                  );
                })}
              </animated.div>
            </div>
          </div>
        </section>

        <section className="bg-gray-300">
          <div className="md:py-4">
            <p className="text-center xl:text-4xl md:text-3xl font-bold text-gray-600">
              Learning Tools
            </p>
            <div className="xl:w-24 md:w-16 border-0 xl:border-t-8 md:border-t-4 border-solid border-type-string rounded-md mx-auto xl:mt-3 md:mt-2"></div>
            <div className="flex flex-col justify-center gap-5 xl:mb-3">
              <section className="xl:mt-6 md:mt-4 flex flex-wrap justify-center items-center gap-5 w-full">
                {learn.map((item) => {
                  return (
                    <img
                      className="xl:w-1/7 md:w-1/4 shadow-lg bg-gray-200 rounded-lg hover:scale-110 hover:duration-500"
                      src={item.img}
                    ></img>
                  );
                })}
              </section>
            </div>
          </div>
        </section>
      </div>
      {/* WEB VIEW*/}

      {/* MOBILE VIEW */}
      <div className="mt-20 PY-4 md:hidden">
        <section className="bg-white">
          <div className="py-4">
            <p className="text-center text-2xl font-bold text-gray-600">
              Tools Used
            </p>
            <div className="w-16 mt-2 border-0 border-t-4 border-solid border-nav rounded-md mx-auto"></div>
            <div className="flex flex-col justify-center gap-5">
              <section className="mt-3 py-3 flex flex-wrap justify-center items-center gap-4 w-full">
                {used.map((item) => {
                  return (
                    <img
                      className="w-1/4 shadow-lg bg-gray-100 rounded-lg hover:scale-110 hover:duration-500"
                      src={item.img}
                    ></img>
                  );
                })}
              </section>
            </div>
          </div>
        </section>

        <section className="bg-gray-300">
          <div className="py-4">
            <p className="text-center text-2xl font-bold text-gray-600">
              Learning Tools
            </p>
            <div className="w-16 mt-2 border-0 border-t-4 border-solid border-nav rounded-md mx-auto"></div>
            <div className="flex flex-col justify-center gap-5">
              <section className="mt-3 py-3 flex flex-wrap justify-center items-center gap-4 w-full">
                {learn.map((item) => {
                  return (
                    <img
                      className="w-1/4 shadow-lg bg-gray-100 rounded-lg hover:scale-110 hover:duration-500"
                      src={item.img}
                    ></img>
                  );
                })}
              </section>
            </div>
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
    </>
  );
}

export default Skill;
