import { Link } from "react-router-dom";

function GameCard({ src, title, imagePosition, pagelink }) {
  return (
    <Link
      to={pagelink}
      className="h-24 rounded-xl flex items-center bg-right bg-no-repeat"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `${imagePosition}`,
      }}
    >
      <div className="w-full h-full rounded-xl bg-gradient-to-r from-secondary from-40% flex items-center pl-8 border border-secondary hover:border-accent hover:shadow-xl transition dark:from-dark-secondary dark:from-40% dark:border-dark-secondary dark:hover:border-accent dark:hover:shadow-xl">
        <p className="font-bold text-4xl max-[600px]:text-2xl text-title dark:text-dark-title transition-colors">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default GameCard;
