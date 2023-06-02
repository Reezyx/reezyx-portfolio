import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname.split("/")[1]);

  useEffect(() => {
    setPath(pathname.split("/")[1]);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <div className="">
      <Outlet />
      </div>
    </div>
  );
}

export default Layout;
