import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import PokemonGeneral from "../components/PokemonGeneral";
import PokemonAbilities from "../components/PokemonAbilities";
import PokemonStats from "../components/PokemonStats";
import PokemonSprites from "../components/PokemonSprites";
import PokemonCries from "../components/PokemonCries";

function Details() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchOnePokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOnePokemon();
  }, [name]);

  console.log(pokemon);
  if (loading) return <Loading />;
  if (!pokemon) return <div>Pokemon not found</div>;
  return (
    <>
      <PokemonGeneral name={pokemon.name} id={pokemon.id} />
      <PokemonAbilities abilities={pokemon.abilities} />
      <PokemonStats stats={pokemon.stats} />
      <PokemonSprites sprites={pokemon.sprites} />
      <PokemonCries id={pokemon.id} />
    </>
  );
}

export default Details;
