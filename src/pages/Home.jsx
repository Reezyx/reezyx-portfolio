import { IconArrowDown, IconArrowUpRight, IconCode, IconServer, IconSparkles } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import MediaImage from "../components/MediaImage";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";
import { profile, projects, skills, socialLinks } from "../data/portfolio";

function Home() {
  return <>
    <section className="hero section--ink">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span>01</span> Independent web developer</p>
          <h1>Building <em>useful</em><br />digital products<span className="accent-dot">.</span></h1>
          <p className="hero-lead">{profile.descriptor}</p>
          <div className="hero-actions"><a className="button button--accent" href="#work">See selected work <IconArrowDown size={17} /></a><Link className="text-link" to="/experience">More about me <IconArrowUpRight size={16} /></Link></div>
          <SocialLinks links={socialLinks} />
        </Reveal>
        <Reveal className="hero-visual" delay={120}>
          <div className="hero-visual__frame"><MediaImage src="/image/raw1.png" alt={profile.name} fetchPriority="high" decoding="async" width="640" height="640" /></div>
          <div className="hero-visual__note"><span>Based in</span><strong>{profile.location}</strong><span>Open to good problems</span></div>
        </Reveal>
      </div>
      <div className="container hero-meta"><span>Scroll to explore</span><span className="hero-meta__line" /><span>2026 / Portfolio</span></div>
    </section>

    <section className="section section--surface" id="work">
      <div className="container">
        <Reveal className="section-intro"><p className="eyebrow"><span>02</span> Selected work</p><h2>Work with a reason.</h2><p>I care about the layer underneath the interface: clear decisions, reliable systems, and details that make a product feel considered.</p></Reveal>
        <div className="project-list">{projects.slice(0, 5).map((item, index) => <Reveal key={item.title} delay={index * 45}><ProjectCard item={item} index={index} featured={index === 0} /></Reveal>)}</div>
        <Link className="button button--outline section-cta" to="/project">View all projects <IconArrowUpRight size={17} /></Link>
      </div>
    </section>

    <section className="section about-section section--paper">
      <div className="container about-grid">
        <Reveal className="about-image"><MediaImage src="/image/raw2.png" alt="Rudiansyah working" loading="lazy" decoding="async" width="520" height="520" /><span>03 / The person behind the pixels</span></Reveal>
        <Reveal className="about-copy" delay={100}><p className="eyebrow"><span>03</span> A little context</p><h2>The part before the code matters.</h2><p>{profile.about}</p><div className="capability-list"><div><IconCode size={20} /><span>Interface craft</span><small>Frontend systems with character</small></div><div><IconServer size={20} /><span>Product foundations</span><small>Backends that stay understandable</small></div><div><IconSparkles size={20} /><span>Curious by default</span><small>Always learning, always iterating</small></div></div><Link className="text-link" to="/skill">Explore my toolkit <IconArrowUpRight size={16} /></Link></Reveal>
      </div>
    </section>

    <section className="section toolkit-section section--accent">
      <div className="container toolkit-grid"><div><p className="eyebrow eyebrow--dark"><span>04</span> The toolkit</p><h2>Tools are only useful when they serve the idea.</h2><p>My daily work sits between interfaces, APIs, data, and the people using them.</p><Link className="button button--dark" to="/skill">See all skills <IconArrowUpRight size={17} /></Link></div><div className="logo-cloud">{skills.core.slice(0, 9).map(([name, src]) => <div className="logo-chip" key={name}><img src={src} alt="" loading="lazy" width="42" height="42" /><span>{name}</span></div>)}</div></div>
    </section>
  </>;
}

export default Home;
