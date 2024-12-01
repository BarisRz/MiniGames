import Navbar from "../components/NavBar";
import PixelatedImage from "../components/PixelatedImage";

function App() {
  return (
    <>
      <Navbar />
      <PixelatedImage
        src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
        pixelSize={100}
      />
    </>
  );
}

export default App;
