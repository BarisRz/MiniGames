import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] m-auto py-2 h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default App;
