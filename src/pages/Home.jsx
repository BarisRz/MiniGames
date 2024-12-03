import GameCard from "../components/Home/GameCard";

function Home() {
  return (
    <div className="flex flex-col space-y-2 mt-10 max-[1440px]:px-3">
      <GameCard
        src={
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
        }
        title={"League Artwork Blindtest"}
        imagePosition={"right -170px"}
      />
      <GameCard title={"Coming soon..."} />
      <GameCard title={"Coming soon..."} />
    </div>
  );
}

export default Home;
