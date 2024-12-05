import Fuse from "fuse.js";

/**
 * Vérifie si la réponse donnée par l'utilisateur correspond au champion sélectionné.
 * @param {Array} championList - La liste actuelle des champions.
 * @param {number} chosenChampion - L'indice du champion à deviner.
 * @param {string} search - La réponse donnée par l'utilisateur.
 * @returns {boolean} - Retourne `true` si la réponse est correcte, sinon `false`.
 */
export function isCorrectAnswer(championList, chosenChampion, search) {
  if (
    !championList ||
    championList.length === 0 ||
    !championList[chosenChampion]
  )
    return false;

  const fuseOptions = {
    minMatchCharLength: 1,
    includeMatches: true,
    keys: ["id", "name"],
    threshold: 0.1,
    useExtendedSearch: true,
  };

  const fuse = new Fuse(championList, fuseOptions);
  const results = fuse.search(search);

  // Vérifie si le meilleur résultat correspond au champion choisi
  if (results.length > 0) {
    const closestMatch = results[0].item.name.toLowerCase().trim();
    const correctName = championList[chosenChampion].name.toLowerCase().trim();
    return closestMatch === correctName;
  }

  return false;
}
