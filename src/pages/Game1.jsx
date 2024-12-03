import { Link } from "react-router-dom";
import { useChampion } from "../contexts/ChampionsContext";

function Game1() {
  const { championList } = useChampion();
  console.log(championList);
  console.log(typeof championList);
  return (
    <div className="flex flex-col space-y-2 items-center mt-6">
      <Link to={"/game1/infinite"} className="game1-selection-btn">
        Infini
      </Link>
      <Link to={"/game1/infinite"} className="game1-selection-btn">
        Normal
      </Link>
    </div>
  );
}

export default Game1;
