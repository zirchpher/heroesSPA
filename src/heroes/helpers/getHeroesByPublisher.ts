import { heroes } from "../data/Heroes";
import { Publisher } from "../types";

export const getHeroesByPublisher = (publisher: Publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" is not valid`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
