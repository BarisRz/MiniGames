import Fuse from "fuse.js";
import { useState } from "react";
import { useChampion } from "../contexts/ChampionsContext";
import PixelatedImage from "../components/Game1/PixelatedImage";

export default function Game1Infinite() {
  const { championList } = useChampion();
  const [search, setSearch] = useState("");
  const fuseOptions = {
    minMatchCharLength: 1,
    includeMatches: true,
    keys: ["id", "name"],
    threshold: 0.1,
    distance: 100,
    useExtendedSearch: true,
  };
  const fuse = new Fuse(championList, fuseOptions);
  console.log(fuse.search(search));
  return (
    <div>
      <p className="dark:text-dark-title">Test barre de recherche :</p>
      <input
        type="search"
        className="dark:bg-dark-primary dark:text-dark-title p-2 border-accent border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {fuse.search(search, { limit: 10 }).map((element) => (
          <div key={element.item.id} className="text-dark-title p-2">
            <button
              className="flex items-center space-x-2"
              type="button"
              onClick={() => setSearch(element.item.name)}
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
    </div>
  );
}
