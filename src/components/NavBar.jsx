import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav
      className="text-3xl font-black font-Montserrat
    "
    >
      <span className="font-medium">m</span>
      <span className="text-accent">G</span>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
