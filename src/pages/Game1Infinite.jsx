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
    useExtendedSearch: true,
  };
  const fuse = championList && new Fuse(championList, fuseOptions);
  console.log(fuse?.search(search));
  return (
    <>
      <div className="flex items-center mt-4 flex-col w-screen max-w-[1000px] max-[500px]:w-[300px] m-auto">
        <PixelatedImage
          src={
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
          }
          pixelSize={1}
        />
        <input
          type="search"
          className="w-full bg-secondary-accent h-20 rounded-3xl text-title dark:text-dark-title dark:bg-dark-secondary2 px-8 dark:placeholder-dark-subtitle/50 placeholder-subtitle/70 focus:outline-none focus:ring-2 focus:ring-accent transition-colors text-xl placeholder:text-base mt-8"
          placeholder="Quel est ce champion?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {fuse?.search(search, { limit: 20 }).map((element) => (
          <div key={element.item.id} className="text-dark-title p-2 w-full">
            <button
              className="flex items-center space-x-2"
              type="button"
              onClick={() => setSearch(element.item.name)}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/${element.item.id}.png`}
                className="h-10 w-10 rounded-full"
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
