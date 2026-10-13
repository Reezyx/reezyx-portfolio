import CertificateCard from "../components/CertificateCard";
import Reveal from "../components/Reveal";
import { certifications } from "../data/portfolio";

function Certification() {
  return <div className="page-shell section--paper"><div className="container page-intro"><Reveal><p className="eyebrow"><span>04</span> Certificates</p><h1>Proof of being<br /><em>curious.</em></h1><p>Formal milestones from the learning paths, programs, and communities that have helped me grow.</p></Reveal></div><div className="container certificate-grid">{certifications.map((item, index) => <Reveal key={item.title} delay={(index % 3) * 45}><CertificateCard item={item} /></Reveal>)}</div></div>;
}

export default Certification;
