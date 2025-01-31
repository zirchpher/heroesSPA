import { heroes } from "../data";

export const getHeroesByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  const isInvalidName = name.length === 0;

  if (isInvalidName) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
