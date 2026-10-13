import Reveal from "../components/Reveal";
import { skills } from "../data/portfolio";

function SkillGroup({ title, description, items }) {
  return <section className="skill-group"><Reveal><div className="skill-group__heading"><div><p className="eyebrow"><span>—</span> {title}</p><h2>{description}</h2></div><span className="skill-count">{String(items.length).padStart(2, "0")} tools</span></div></Reveal><div className="skill-grid">{items.map(([name, src], index) => <Reveal key={name} delay={index * 35}><div className="skill-tile"><img src={src} alt="" loading="lazy" decoding="async" width="72" height="72" /><span>{name}</span><small>{String(index + 1).padStart(2, "0")}</small></div></Reveal>)}</div></section>;
}

function Skill() {
  return <div className="page-shell section--paper"><div className="container page-intro"><Reveal><p className="eyebrow"><span>02</span> Tools & technologies</p><h1>A toolkit with<br /><em>intent.</em></h1><p>Enough range to move from a rough interface to a dependable release, with an emphasis on fundamentals.</p></Reveal></div><div className="container skills-content"><SkillGroup title="Core practice" description="The tools I reach for most." items={skills.core} /><SkillGroup title="Exploring" description="The edges I am currently pushing." items={skills.exploring} /></div></div>;
}

export default Skill;
