import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const onNavigateBack = () => {
    const isFirstPage = window.history.length <= 2;

    if (isFirstPage) {
      navigate("/marvel");
    } else {
      navigate(-1);
    }
  };

  const hero = useMemo(() => getHeroeById(id!), [id]);

  const haveHero = hero ? true : false;

  if (!haveHero) {
    return <Navigate to="/marvel" />;
  }

  const urlImage = `../assets/heroes/${hero?.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={urlImage} alt={hero?.superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{hero?.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {hero?.alter_ego}
          </li>

          <li className="list-group-item">
            <b>Publisher:</b> {hero?.publisher}
          </li>

          <li className="list-group-item">
            <b>First Appearance:</b> {hero?.first_appearance}
          </li>
        </ul>

        <div>
          <h5 className="mt-3">Characters</h5>
          <p>{hero?.characters}</p>
        </div>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
