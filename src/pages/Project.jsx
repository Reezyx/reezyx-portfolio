import { IconArrowDown } from "@tabler/icons-react";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/portfolio";

function Project() {
  return <div className="page-shell section--surface"><div className="container page-intro"><Reveal><p className="eyebrow"><span>01</span> Archive / selected work</p><h1>A collection of things<br /><em>made useful.</em></h1><p>Web products, experiments, and collaborations built across frontend, backend, and everything in between.</p><a className="scroll-cue" href="#project-grid">Browse the archive <IconArrowDown size={17} /></a></Reveal></div><div className="container project-grid" id="project-grid">{projects.map((item, index) => <Reveal key={item.title} delay={(index % 3) * 50}><ProjectCard item={item} index={index} featured={index === 0} /></Reveal>)}</div></div>;
}

export default Project;
