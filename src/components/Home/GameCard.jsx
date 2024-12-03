import { Link } from "react-router-dom";
import { useState } from "react";

function GameCard({
  src,
  title,
  imagePosition,
  link1 = null,
  text1,
  link2 = null,
  text2,
  link3 = null,
  text3,
}) {
  const [modal, setModal] = useState(false);
  return (
    <button
      className="h-24 rounded-xl flex items-center bg-right bg-no-repeat"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `${imagePosition}`,
      }}
      onClick={() => setModal(!modal)}
    >
      <div className="w-full h-full rounded-xl bg-gradient-to-r from-secondary from-40% flex items-center pl-8 border border-secondary hover:border-accent hover:shadow-xl transition dark:from-dark-secondary dark:from-40% dark:border-dark-secondary dark:hover:border-accent dark:hover:shadow-xl">
        <p className="font-bold text-4xl max-[600px]:text-2xl text-title dark:text-dark-title transition-colors">
          {title}
        </p>
      </div>
      {modal && (
        <div
          className="modal-choix-game fixed inset-0 w-screen bg-black/50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-50 box-border overflow-hidden flex flex-col space-y-2 items-center justify-center text-white"
          onClick={() => setModal(!modal)}
        >
          <Link className="game1-selection-btn" to={link1}>
            {text1}
          </Link>
          {link2 && (
            <Link className="game1-selection-btn" to={link2}>
              {text2}
            </Link>
          )}
          {link3 && (
            <Link className="game1-selection-btn" to={link3}>
              {text3}
            </Link>
          )}
          <button className="bg-accent text-4xl font-bold w-80 h-16 flex items-center justify-center rounded-lg border border-accent hover:border-blue-950 hover:bg-blue-950 max-[600px]:w-48 max-[600px]:h-12 max-[600px]:text-xl transition-colors dark:bg-accent dark:border-dark-secondary2 dark:text-dark-title dark:hover:border-blue-950 dark:hover:bg-blue-950">
            Fermer
          </button>
        </div>
      )}
    </button>
  );
}

export default GameCard;
