import { IconArrowUpRight } from "@tabler/icons-react";
import MediaImage from "./MediaImage";

function ProjectCard({ item, index = 0, featured = false }) {
  return <a className={`project-card ${featured ? "project-card--featured" : ""}`} href={item.link} target="_blank" rel="noreferrer" onPointerMove={(event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }}>
    <span className="project-card__number">{String(index + 1).padStart(2, "0")}</span>
    <div className="project-card__media"><MediaImage src={item.img} alt={`${item.title} project`} loading="lazy" decoding="async" width="640" height="420" /></div>
    <div className="project-card__body"><div><p className="project-card__type">{item.position}</p><h3>{item.title}</h3><div className="tag-row">{item.stack.map((stack) => <span key={stack}>{stack}</span>)}</div></div><span className="card-arrow"><IconArrowUpRight size={22} /></span></div>
  </a>;
}

export default ProjectCard;
