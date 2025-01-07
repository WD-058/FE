function PokemonGeneral({ name, id }) {
  return (
    <div className="flex justify-around items-center mb-5">
      <h2 className="text-primary text-4xl capitalize">{name}</h2>
      <div className="avatar">
        <div className="w-56 rounded-full bg-black">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonGeneral;
