function GameCard({ src, title, imagePosition }) {
  return (
    <div
      className="game-card"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `${imagePosition}`,
      }}
    >
      <div className="game-card-artwork">
        <p className="font-bold text-4xl max-[600px]:text-2xl text-title dark:text-dark-title transition-colors">
          {title}
        </p>
      </div>
    </div>
  );
}

export default GameCard;