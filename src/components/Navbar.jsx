import {
  IconApi,
  IconBrandGitlab,
  IconCertificate,
  IconCode,
  IconHome2,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navMobile, setNavMobile] = useState(false);
  const location = useLocation();
  const handleChangeNav = () => {
    setNavMobile(!navMobile);
  };
  return (
    <div className="z-50 fixed bg-nav-color w-full top-0 shadow-md" id="navbar">
      <div className="flex justify-between mx-3 md:mx-5 lg:mx-8 py-5 md:py-3 items-center">
        <Link to="/">
          <img src="/image/report.png" className="w-36 xl:w-48" />
        </Link>
        <IconMenu2
          onClick={handleChangeNav}
          size={30}
          className="cursor-pointer md:hidden text-white"
        />

        <div className="hidden md:flex items-center gap-4 lg:gap-10 font-semibold xl:py-4">
          <Link
            to="/"
            className={
              location.pathname == "/"
                ? "text-nav font-bold lg:text-2xl md:text-base"
                : "text-white hover:text-nav hover:duration-500 font-bold lg:text-2xl md:text-base"
            }
          >
            Home
          </Link>
          <Link
            to="/skill"
            className={
              location.pathname == "/skill"
                ? "text-nav font-bold lg:text-2xl md:text-base"
                : "text-white hover:text-nav hover:duration-500 font-bold lg:text-2xl md:text-base"
            }
          >
            Skill
          </Link>
          <Link
            to="/experience"
            className={
              location.pathname == "/experience"
                ? "text-nav font-bold lg:text-2xl md:text-base"
                : "text-white hover:text-nav hover:duration-500 font-bold lg:text-2xl md:text-base"
            }
          >
            Experience
          </Link>
          <Link
            to="/certification"
            className={
              location.pathname == "/certification"
                ? "text-nav font-bold lg:text-2xl md:text-base"
                : "text-white hover:text-nav hover:duration-500 font-bold lg:text-2xl md:text-base"
            }
          >
            Certification
          </Link>
          <Link
            to="/project"
            className={
              location.pathname == "/project"
                ? "text-nav font-bold lg:text-2xl md:text-base"
                : "text-white hover:text-nav hover:duration-500 font-bold lg:text-2xl md:text-base"
            }
          >
            Project
          </Link>
        </div>

        <Drawer
          title={
            <Link to="/">
              <img src="/image/report.png" className="w-36 xl:w-48" />
            </Link>
          }
          placement={"top"}
          onClose={() => {
            setNavMobile(false);
          }}
          open={navMobile}
          closable={false}
          style={{
            backgroundColor: "#423e3b",
          }}
          height={440}
          extra={
            <Space>
              <a
                className="text-white hover:text-nav"
                onClick={() => {
                  setNavMobile(false);
                }}
              >
                <IconX />
              </a>
            </Space>
          }
        >
          <div className="flex flex-col my-4">
            <Link
              onClick={() => {
                setNavMobile(false);
              }}
              to="/"
              className={
                location.pathname == "/"
                  ? "text-nav flex font-bold text-lg py-2 gap-5"
                  : "text-white flex font-bold text-lg py-2 gap-5 hover:text-nav"
              }
            >
              <IconHome2 />
              <p>Home</p>
            </Link>
          </div>
          <div className="flex flex-col my-4">
            <Link
              onClick={() => {
                setNavMobile(false);
              }}
              to="/skill"
              className={
                location.pathname == "/skill"
                  ? "text-nav flex font-bold text-lg py-2 gap-5"
                  : "text-white flex font-bold text-lg py-2 gap-5 hover:text-nav"
              }
            >
              <IconCode />
              <p>Skill</p>
            </Link>
          </div>
          <div className="flex flex-col my-4">
            <Link
              onClick={() => {
                setNavMobile(false);
              }}
              to="/experience"
              className={
                location.pathname == "/experience"
                  ? "text-nav flex font-bold text-lg py-2 gap-5"
                  : "text-white flex font-bold text-lg py-2 gap-5 hover:text-nav"
              }
            >
              <IconApi />
              <p>Experience</p>
            </Link>
          </div>
          <div className="flex flex-col my-4">
            <Link
              onClick={() => {
                setNavMobile(false);
              }}
              to="/certification"
              className={
                location.pathname == "/certification"
                  ? "text-nav flex font-bold text-lg py-2 gap-5"
                  : "text-white flex font-bold text-lg py-2 gap-5 hover:text-nav"
              }
            >
              <IconCertificate />
              <p>Certification</p>
            </Link>
          </div>
          <div className="flex flex-col my-4">
            <Link
              onClick={() => {
                setNavMobile(false);
              }}
              to="/project"
              className={
                location.pathname == "/project"
                  ? "text-nav flex font-bold text-lg py-2 gap-5"
                  : "text-white flex font-bold text-lg py-2 gap-5 hover:text-nav"
              }
            >
              <IconBrandGitlab />
              <p>Project</p>
            </Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
