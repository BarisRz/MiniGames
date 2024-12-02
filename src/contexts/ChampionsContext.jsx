import { createContext, useState, useContext, useMemo, useEffect } from "react";

const ChampionsContext = createContext(null);
export const useChampion = () => useContext(ChampionsContext);

export function ChampionsProvider({ children }) {
  const [championList, setChampionList] = useState(null);

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((element) => {
        setChampionList(element.data);
      });
  }, []);

  const value = useMemo(() => {
    return { championList, setChampionList };
  }, [championList, setChampionList]);

  return (
    <ChampionsContext.Provider value={value}>
      {children}
    </ChampionsContext.Provider>
  );
}
