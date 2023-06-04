import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname.split("/")[1]);

  useEffect(() => {
    setPath(pathname.split("/")[1]);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
