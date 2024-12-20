import Fuse from "fuse.js";
import { useState, useEffect } from "react";
import { useChampion } from "../contexts/ChampionsContext";
import PixelatedImage from "../components/Game1/PixelatedImage";
import { isCorrectAnswer } from "../utils/gameLogic";
import { Check } from "lucide-react";

export default function Game1Infinite() {
  const { championList, setChampionList } = useChampion();
  const [search, setSearch] = useState("");
  const [chosenChampion, setChosenChampion] = useState(0);
  const [isImageClear, setIsImageClear] = useState(false);

  // Change le champion choisi à chaque mise à jour de la liste
  useEffect(() => {
    if (championList?.length > 0) {
      setChosenChampion(Math.floor(Math.random() * championList.length));
    }
  }, [championList]);

  // Gestion de l'appui sur Entrée
  const handleKeyDown = (event, suggestion = null) => {
    // Si une suggestion est fournie, utilise son texte, sinon la recherche actuelle
    const answer = suggestion || search;

    // Gère uniquement "Entrée" ou un clic direct via suggestion
    if (event.key === "Enter" || suggestion) {
      if (isCorrectAnswer(championList, chosenChampion, answer)) {
        setIsImageClear(true); // Rendre l'image nette

        const updatedList = championList.filter(
          (champion) => champion.name !== championList[chosenChampion].name
        );

        setTimeout(() => {
          setChampionList(updatedList); // Mettre à jour la liste après le délai
          setIsImageClear(false); // Revenir au flou
          if (updatedList.length > 0) {
            setChosenChampion(Math.floor(Math.random() * updatedList.length)); // Changer de champion
          }
        }, 2000); // 2 secondes pour montrer l'image nette

        setSearch(""); // Réinitialiser la barre de recherche
      } else {
        setSearch(""); // Réinitialiser en cas de mauvaise réponse
      }
    }
  };

  if (!championList) return null; // Si la liste n'est pas encore chargée
  if (championList.length === 0)
    return (
      <div className="flex items-center mt-4 flex-col w-screen max-w-[1000px] max-[500px]:max-w-[280px] m-auto">
        <Check size={128} className="text-accent mt-10" />
        <p className="text-subtitle dark:text-dark-title font-bold text-lg text-center">
          Bravo !
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 border border-secondary-accent dark:border-dark-secondary p-4 rounded-xl bg-secondary dark:bg-dark-secondary2 hover:border-accent hover:bg-secondary-accent dark:hover:bg-dark-secondary text-title dark:text-dark-title dark:hover:border-accent transition-colors"
        >
          Rejouer?
        </button>
      </div>
    );

  // Configuration de Fuse.js pour afficher des suggestions
  const fuseOptions = {
    minMatchCharLength: 1,
    includeMatches: true,
    keys: ["id", "name"],
    threshold: 0.1,
    useExtendedSearch: true,
  };

  const fuse = new Fuse(championList, fuseOptions);
  const searchResults = search ? fuse.search(search, { limit: 10 }) : [];

  return (
    <div className="flex items-center mt-4 flex-col w-screen max-w-[1000px] m-auto">
      {/* Image du champion pixelisée */}
      {championList[chosenChampion] && (
        <PixelatedImage
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championList[chosenChampion].id}_0.jpg`}
          length={championList.length}
          pixel={150}
          width={((169 - championList.length) / 169) * 100}
          isImageClear={isImageClear}
        />
      )}

      {/* Barre de recherche */}
      <input
        type="search"
        className="w-full mb-2 bg-secondary-accent h-20 rounded-3xl text-title dark:text-dark-title dark:bg-dark-secondary2 px-8 dark:placeholder-dark-subtitle/50 placeholder-subtitle/70 focus:outline-none focus:ring-2 focus:ring-accent transition-colors text-xl placeholder:text-base mt-8 max-[500px]:rounded-none max-[500px]:h-14"
        placeholder="Quel est ce champion ?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={20}
      />

      {/* Suggestions Fuse.js */}
      {searchResults.map((result) => (
        <div key={result.item.id} className="text-dark-title py-1 w-full">
          <button
            className="flex items-center space-x-2 bg-secondary dark:bg-dark-secondary2 w-full rounded-r-2xl border border-secondary dark:border-dark-secondary2 hover:border-accent dark:hover:border-accent hover:bg-secondary-accent dark:hover:bg-dark-secondary transition-colors max-[500px]:rounded-none"
            type="button"
            onClick={() => handleKeyDown({ key: "Enter" }, result.item.name)}
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${result.item.id}.png`}
              className="h-10 w-10"
              alt={result.item.name}
            />
            <p className="dark:text-dark-title text-title">
              {result.item.name}
            </p>
          </button>
        </div>
      ))}
    </div>
  );
}
