import { heroes } from "../data";
import { Heroes } from "../types";

export const getHeroeById = (id: Heroes["id"]) => {
  return heroes.find((heroe) => heroe.id === id);
};
