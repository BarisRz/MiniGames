import { Ban } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-primary dark:bg-dark-primary flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Ban size={128} className="text-title mb-2 dark:text-dark-title" />
        <h1 className="text-3xl text-title dark:text-dark-title max-[500px]:text-xl ">
          404 : Page introuvable
        </h1>
        <Link
          to={"/"}
          className="bg-secondary dark:bg-dark-secondary hover:bg-secondary-accent text-title dark:hover:bg-dark-secondary2 dark:border-dark-secondary dark:hover:border-accent dark:text-dark-title mt-4 p-4 rounded-lg border border-secondary hover:border-accent transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
