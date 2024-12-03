import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? 1
      : Number(localStorage.getItem("theme"))
  );

  useEffect(() => {
    const body = document.querySelector("html");
    body.classList.toggle("dark", !theme);
  }, [theme]);

  return (
    <button
      className="nav-icon"
      onClick={() => {
        setTheme(!theme);
        localStorage.setItem("theme", Number(!theme));
      }}
    >
      {theme ? <Sun strokeWidth={1} /> : <Moon strokeWidth={1} />}
    </button>
  );
}

export default ThemeToggle;
