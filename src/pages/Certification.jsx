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
import CertificateCard from "../components/CertificateCard";

function Certification() {
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
      img: "/image/advisor_bangkit.png",
      title: "Advisor Company Capstone - Bangkit",
      position: "Fullstack Developer",
      issued: "Jun 2024",
    },
    {
      img: "/image/dasar_pemrograman_dicoding.png",
      title: "Memulai Dasar Pemrograman - Dicoding",
      link: "https://www.dicoding.com/certificates/EYX4YLLROZDL",
      issued: "Nov 2023",
      expired: "Nov 2026",
    },
    {
      img: "/image/manajemen_proyek_dicoding.png",
      title: "Dasr Manajemen Proyek - Dicoding",
      link: "https://www.dicoding.com/certificates/98XWV6470PM3",
      issued: "Sep 2023",
      expired: "Sep 2026",
    },
    {
      img: "/image/react_sanbercode.png",
      title: "ReactJS Web Frontend - Sanber Code",
      link: "https://drive.google.com/file/d/1XjmxAT4MN42_zG0fHEImM3UCZl0glCun/view",
      issued: "Mar 2023",
    },
    {
      img: "/image/laravel_camp404.png",
      title: "Laravel Web Programming - Camp404",
      link: "https://drive.google.com/file/d/1TgMoBOHO7b4ypJbGUUNC7JLbohIF1kdd/view",
      issued: "Mar 2023",
      expired: "Mar 2026",
    },
    {
      img: "/image/web_camp404.png",
      title: "Web Fundamentals - Camp404",
      link: "https://drive.google.com/file/d/1H_VbkF273Jhj2rJWVzuGBbs4TCYql6Dt/view",
      issued: "Mar 2023",
      expired: "Mar 2026",
    },
    {
      img: "/image/dasarjs_dicoding.png",
      title: "Dasar Pemrograman JS - Dicoding",
      link: "https://www.dicoding.com/certificates/JMZVNO5LNPN9",
      issued: "Feb 2023",
      expired: "Feb 2026",
    },
    {
      img: "/image/react_camp404.png",
      title: "ReactJS Web Programming - Camp404",
      link: "https://drive.google.com/file/d/1KmGf4ahbfEvR3c8w0S812nxRyFYxukhI/view",
      issued: "Jan 2023",
      expired: "Jan 2026",
    },
    {
      img: "/image/backend_ruangguru.png",
      title: "Back-End Engineering - Ruangguru",
      link: "https://drive.google.com/file/d/13nmITEw4Dd3A8Epq5K5elueVtaM3y_8m/view",
      issued: "Jul 2022",
    },
    {
      img: "/image/golang_udemy.png",
      title: "Golang Bootcamp - Udemy",
      link: "https://www.udemy.com/certificate/UC-50465918-e1dc-4c63-abd5-f541213bac43/",
      issued: "Jul 2022",
    },
  ];

  return (
    <>
      {/* WEB VIEW*/}
      <div className="mt-4 md:block hidden">
        <section className="bg-white mx-5">
          <div className="xl:mt-28 md:mt-20">
            <p className="xl:text-4xl md:text-3xl text-center font-bold">
              Certified Expertise
            </p>
            <div className="xl:w-24 md:w-16 border-0 xl:border-t-8 md:border-t-4 border-solid border-nav rounded-md mx-auto xl:mt-3 md:mt-2"></div>

            <div className="mx-5 my-8 grid xs:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((item) => {
                return (
                  <animated.div style={style} className={"flex"}>
                    <CertificateCard item={item} />
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
            <p className="text-2xl text-center font-bold">
              Certified Expertise
            </p>
            <div className="w-16 mt-2 border-0 border-t-4 border-solid border-nav rounded-md mx-auto"></div>
            <div className="my-3 grid grid-cols-1 sm:gap-y-3">
              {projects.map((item) => {
                return <CertificateCard item={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
    </>
  );
}

export default Certification;
