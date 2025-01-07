import { Link } from "react-router-dom";

function PokemonCard({ name, url }) {
  const id = url.split("/")[6] || "0";

  return (
    <div className="card bg-neutral shadow-lg">
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize text-secondary">
          {name} <Link to={`pokemon/${name}`}> Learn more</Link>
        </h2>
      </div>
    </div>
  );
}

export default PokemonCard;
