import { IconBrandGithub, IconBrandGitlab, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const icons = { github: IconBrandGithub, gitlab: IconBrandGitlab, instagram: IconBrandInstagram, linkedin: IconBrandLinkedin, youtube: IconBrandYoutube };

function SocialLinks({ links }) {
  return <div className="social-links" aria-label="Social links">
    {links.map(([label, href, icon]) => {
      const Icon = icons[icon];
      return <a key={label} href={href} target="_blank" rel="noreferrer">{Icon ? <Icon size={17} stroke={1.7} /> : null}<span>{label}</span></a>;
    })}
  </div>;
}

export default SocialLinks;
