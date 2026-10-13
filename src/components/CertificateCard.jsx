import { IconArrowUpRight } from "@tabler/icons-react";
import MediaImage from "./MediaImage";

function CertificateCard({ item }) {
  const content = <><div className="certificate-card__media"><MediaImage src={item.img} alt={`${item.title} certificate`} loading="lazy" decoding="async" width="640" height="420" /></div><div className="certificate-card__body"><div><p>{item.issued}</p><h3>{item.title}</h3><span>{item.expired ? `Expires ${item.expired}` : "Certificate of completion"}</span></div><IconArrowUpRight size={20} /></div></>;
  return item.link ? <a className="certificate-card" href={item.link} target="_blank" rel="noreferrer">{content}</a> : <div className="certificate-card">{content}</div>;
}

export default CertificateCard;
