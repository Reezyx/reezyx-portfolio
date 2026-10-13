import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Navbar />
      <main className="page-easein"><Outlet /></main>
      <Footer />
    </div>
  );
}

export default Layout;
