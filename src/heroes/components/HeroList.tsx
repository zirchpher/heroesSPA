import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { Publisher } from "../types";
import { HeroCard } from "./";

interface IPublisher {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: IPublisher) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
