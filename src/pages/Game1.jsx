import React from "react";
import PixelatedImage from "../components/Game1/PixelatedImage";
import { useChampion } from "../contexts/ChampionsContext";

function Game1() {
  const { championList } = useChampion();
  console.log(championList);
  return (
    <PixelatedImage
      src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
      pixelSize={20}
    />
  );
}

export default Game1;
