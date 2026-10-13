import { IconArrowUpRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><p className="eyebrow">Available for thoughtful collaborations</p><h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2></div>
      <a className="footer-mail" href={`mailto:${profile.email}`}>{profile.email} <IconArrowUpRight size={19} /></a>
    </div>
    <div className="container footer-bottom"><span>© 2026 Reezyx</span><div><Link to="/">Home</Link><Link to="/project">Selected work</Link><span>Built with care</span></div></div>
  </footer>;
}

export default Footer;
