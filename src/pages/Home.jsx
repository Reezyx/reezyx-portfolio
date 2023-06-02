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

function Home() {
  const projects = [
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
  ];
  return (
    <>
      {/* WEB VIEW*/}
      <div className="mt-8 md:block hidden">
        <section className="bg-gray-300">
          <div className="md:grid grid-cols-6 items-center w-10/12 mx-auto py-5">
            <div className="col-span-3 md:mt-12">
              <p className="text-gray-800 xl:text-3xl md:text-xl xl:py-1 md-py-1">
                Hello Everyone, I am
              </p>
              <p className="text-gray-900 xl:text-4xl md:text-3xl font-bold xl:py-1 md-py-1">
                Rudiansyah Wijaya Pratama
              </p>
              <div className="flex gap-3 xl:text-4xl md:text-2xl xl:py-1">
                <p>I'm a</p>
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
            </div>
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
            <div className="xl:w-24 md:w-8 border-0 xl:border-t-8 md:border-t-4 border-solid border-nav rounded-md mx-auto xl:mt-3 md:mt-2"></div>
            <section className="mx-5 my-8 grid xs:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {projects.map((item) => {
                return <ProjectCard item={item} />;
              })}
            </section>
            <div className="flex">
              <Link
                className="mx-auto md:text-base xl:text-xl mt-2 font-bold bg-gray-800 hover:bg-type-string hover:duration-500 text-white px-5 py-3 rounded-2xl"
                to={"/project"}
              >
                Lihat Selengkapnya..
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-300">
          <div className="md:py-8">
            <p className="text-center xl:text-4xl md:text-xl font-bold text-gray-600">
              About Me
            </p>
            <div className="xl:w-24 md:w-8 border-0 xl:border-t-8 md:border-t-4 border-solid border-type-string rounded-md mx-auto xl:mt-3 md:mt-2"></div>
            <div className="grid grid-cols-6 mx-20">
              <div className="col-span-2 py-4 xl:mt-6">
                <img className="w-full" src="/image/raw2.png" alt="" />
              </div>
              <div className="col-span-4 flex">
                <p className="xl:text-2wxl font-semibold text-justify my-auto xl:ml-24 md:ml-12 text-gray-800">
                  I am a Final Year Computer Science Student in State University
                  of Jakarta also a Backend Developer Intern at PT Amanah Karya
                  Indonesia who have more than 1 year working experience in
                  there. I have interest in Website Development both Back-End or
                  Front-End Programming and until today I'm still learn about
                  that
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* WEB VIEW*/}
    </>
  );
}

export default Home;
