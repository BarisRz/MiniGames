import Fuse from "fuse.js";
import { useState, useEffect } from "react";
import { useChampion } from "../contexts/ChampionsContext";
import PixelatedImage from "../components/Game1/PixelatedImage";

export default function Game1Infinite() {
  const { championList, setChampionList } = useChampion();
  const [search, setSearch] = useState("");
  const [chosenChampion, setChosenChampion] = useState(0);
  console.log(championList);

  const fuseOptions = {
    minMatchCharLength: 1,
    includeMatches: true,
    keys: ["id", "name"],
    threshold: 0.1,
    useExtendedSearch: true,
  };

  const fuse = championList && new Fuse(championList, fuseOptions);
  const researchFuse = fuse?.search(search, { limit: 10 });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (researchFuse?.[0]?.item.name === championList[chosenChampion].name) {
        const updatedList = championList.filter(
          (element) => element.name !== search
        );
        setChampionList(updatedList);

        if (updatedList.length > 0) {
          setChosenChampion(Math.floor(Math.random() * updatedList.length));
        }
        setSearch("");
      } else {
        setSearch(""); // Réinitialise le champ de recherche
      }
    }
  };

  useEffect(() => {
    if (championList) {
      if (championList.length > 0) {
        setChosenChampion(Math.floor(Math.random() * championList.length));
      }
    }
  }, [championList]);

  if (!championList) return null;
  if (championList.length === 0) return <p>Bravo, vous avez tout trouvé !</p>;

  return (
    <>
      <div className="flex items-center mt-4 flex-col w-screen max-w-[1000px] max-[500px]:w-[300px] m-auto">
        {championList[chosenChampion] && (
          <PixelatedImage
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championList[chosenChampion].id}_0.jpg`}
            pixelSize={1}
            length={championList.length}
          />
        )}

        <input
          type="search"
          className="w-full mb-2 bg-secondary-accent h-20 rounded-3xl text-title dark:text-dark-title dark:bg-dark-secondary2 px-8 dark:placeholder-dark-subtitle/50 placeholder-subtitle/70 focus:outline-none focus:ring-2 focus:ring-accent transition-colors text-xl placeholder:text-base mt-8"
          placeholder="Quel est ce champion?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {researchFuse?.map((element) => (
          <div key={element.item.id} className="text-dark-title py-1 w-full">
            <button
              className="flex items-center space-x-2 bg-secondary dark:bg-dark-secondary2 w-full rounded-r-2xl border border-secondary dark:border-dark-secondary2 hover:border-accent dark:hover:border-accent hover:bg-secondary-accent dark:hover:bg-dark-secondary transition-colors"
              type="button"
              onClick={() => {
                setSearch(element.item.name);
              }}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${element.item.id}.png`}
                className="h-10 w-10"
              />
              <p className="dark:text-dark-title text-title">
                {element.item.name}
              </p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
