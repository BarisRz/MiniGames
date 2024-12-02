import { useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(true);
  return (
    <button
      className="nav-icon"
      onClick={() => {
        setTheme((prev) => !prev);
        console.log(theme);
      }}
    >
      {theme ? <Sun strokeWidth={1} /> : <Moon strokeWidth={1} />}
    </button>
  );
}

export default ThemeToggle;
