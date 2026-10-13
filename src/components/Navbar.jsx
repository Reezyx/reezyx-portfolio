import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [["Home", "/"], ["Work", "/project"], ["Skills", "/skill"], ["Experience", "/experience"], ["Certificates", "/certification"]];

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location.pathname]);

  return <header className="site-header" id="navbar">
    <div className="container nav-inner">
      <Link className="brand" to="/" aria-label="Reezyx home"><span className="brand-mark">R</span><span>reezyx<span className="brand-dot">.</span></span></Link>
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {navItems.map(([label, href]) => <Link className={location.pathname === href ? "is-active" : ""} key={href} to={href}>{label}</Link>)}
        <a className="nav-contact" href="mailto:rudiansyahpratama04@gmail.com">Let&apos;s talk <IconArrowUpRight size={16} /></a>
      </nav>
      <div className="nav-actions"><ThemeToggle /><button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>{open ? <IconX size={21} /> : <IconMenu2 size={21} />}</button></div>
    </div>
  </header>;
}

export default Navbar;
