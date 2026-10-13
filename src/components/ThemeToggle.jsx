import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => document.documentElement.dataset.theme === "light");

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    window.localStorage.setItem("reezyx-theme", isLight ? "light" : "dark");
  }, [isLight]);

  return <button className="theme-toggle" type="button" aria-label={`Switch to ${isLight ? "dark" : "light"} theme`} onClick={() => setIsLight((value) => !value)}>
    {isLight ? <IconMoon size={17} /> : <IconSun size={17} />}<span>{isLight ? "Dark" : "Light"}</span>
  </button>;
}

export default ThemeToggle;
