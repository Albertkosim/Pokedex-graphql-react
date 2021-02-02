import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <button onClick={(e) => console.log("clicked")}>test</button>
      <div className="pokemon_id"></div>

      <div className="pokemon_name">
        <p>{pokemon.name}</p>
      </div>

      <div className="pokemon_image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </div>
  );
}
