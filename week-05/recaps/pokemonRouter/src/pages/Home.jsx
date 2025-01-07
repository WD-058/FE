import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
        const data = await res.json();
        setPokemon(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemon();
  }, []);
  console.log(pokemon);
  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemon.map(({ name, url }) => (
          <PokemonCard name={name} url={url} key={url.split("/")[6] || "0"} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
