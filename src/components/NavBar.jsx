import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-16 bg-primary border-b border-secondary-accent p-3 dark:bg-dark-primary dark:border-black">
      <div className="max-w-[1440px] flex justify-between items-center m-auto">
        <p className="group font-black dark:text-dark-title text-2xl hover:text-accent transition dark:hover:text-accent">
          MG
          <span className="text-accent group-hover:text-title dark:group-hover:text-dark-title transition">
            .
          </span>
        </p>
        <div className="flex items-center space-x-6 max-[600px]:flex-row-reverse">
          <Link className="nav-text-link">Accueil</Link>
          <Link className="nav-text-link">Code</Link>
          <Link className="nav-text-link">Bug?</Link>
          <Link className="nav-text-link">À Propos</Link>

          <div className="nav-splitter" />
          <div className="flex space-x-1 items-center">
            <ThemeToggle />
            <Link
              to={"https://github.com/BarisRz"}
              className="nav-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} strokeWidth={1} />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/gunay-baris/"}
              className="nav-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
