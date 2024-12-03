import { useChampion } from "../contexts/ChampionsContext";

export default function Game1Infinite() {
  const { championList } = useChampion();
  console.log(championList);
  console.log(typeof championList);
  return <div>Game1Infinite</div>;
}
