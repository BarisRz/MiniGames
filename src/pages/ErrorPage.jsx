import { Ban } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-primary dark:bg-dark-primary flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Ban size={128} className="text-title mb-2" />
        <h1 className="text-3xl text-title dark:text-black max-[500px]:text-xl">
          404 : Page introuvable
        </h1>
        <Link
          to={"/"}
          className="bg-secondary mt-4 p-4 rounded-lg border border-secondary hover:border-accent"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
