import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-16 bg-primary border-b border-secondary-accent p-3">
      <div className="max-w-[1440px] flex justify-between items-center m-auto">
        <p className="font-black text-2xl">MG.</p>
        <div className="flex items-center space-x-6 max-[600px]:flex-row-reverse">
          <Link className="nav-text-link">Accueil</Link>
          <Link className="nav-text-link">Code</Link>
          <Link className="nav-text-link">Bug?</Link>
          <Link className="nav-text-link">À Propos</Link>

          <div className="nav-splitter" />
          <div className="flex space-x-1 items-center">
            <ThemeToggle />
            <div className="nav-splitter" />
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
