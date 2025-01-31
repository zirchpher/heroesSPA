import { HeroList } from "../components";
import { Publisher } from "../types";

export const MarvelPage = () => {
  const publisher: Publisher = "Marvel Comics";
  return (
    <>
      <h1>Marvel</h1>
      <hr />

      <HeroList publisher={publisher} />
    </>
  );
};
