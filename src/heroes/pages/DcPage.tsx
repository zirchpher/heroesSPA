import { HeroList } from "../components";
import { Publisher } from "../types";

export const DcPage = () => {
  const publisher: Publisher = "DC Comics";

  return (
    <>
      <h1>DcPage</h1>
      <hr />

      <HeroList publisher={publisher} />
    </>
  );
};
