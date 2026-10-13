import { IconArrowUpRight } from "@tabler/icons-react";
import MediaImage from "../components/MediaImage";
import Reveal from "../components/Reveal";
import { experiences } from "../data/portfolio";

function Experience() {
  return <div className="page-shell section--surface"><div className="container page-intro"><Reveal><p className="eyebrow"><span>03</span> Experience & education</p><h1>The path is part<br />of the <em>work.</em></h1><p>A mix of professional practice, formal education, and the places that shaped how I approach a problem.</p></Reveal></div><div className="container timeline">{experiences.map((item, index) => <Reveal key={item.org} delay={index * 55}><article className="timeline-item"><span className="timeline-index">{String(index + 1).padStart(2, "0")}</span><div className="timeline-image"><MediaImage src={item.image} alt={item.org} loading="lazy" decoding="async" width="520" height="300" /></div><div className="timeline-copy"><p className="eyebrow">{item.type}</p><h2>{item.role}</h2><a href={item.href} target="_blank" rel="noreferrer">{item.org} <IconArrowUpRight size={16} /></a><p>{item.description}</p></div></article></Reveal>)}</div></div>;
}

export default Experience;
