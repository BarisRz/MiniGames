import { useState } from "react";
import GameCard from "../components/Home/GameCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col space-y-2 mt-6 max-[1440px]:px-3 relative">
      <GameCard
        src={
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
        }
        title={"League Artwork Blindtest"}
        imagePosition={"right -170px"}
        link1={"/game1/infinite"}
        text1={"Infinite"}
      />
      <GameCard title={"Coming soon..."} />
      <GameCard title={"Coming soon..."} />
    </div>
  );
}

export default Home;
