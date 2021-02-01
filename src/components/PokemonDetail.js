import React from "react";

export default function PokemonDetail() {
  return (
    <div>
      <H1>This is Detail page</H1>
    </div>
  );
}
/* will return picture of Pokemon, pokemon's moves via Splice(Normal and Special attack) and Type of that pokemon with typeColor.js to assign respective colors to types */
/* add Onclick with useState to enable user to "catch" pokemons adding to the state of catchPokemon*/

/* 
<div className="pokemon_attacks">
        {pokemon &&
          pokemon.attacks &&
          pokemon.attacks.special
            .slice(0, 4)
            .map((attack) => (
              <span key={`${attack.name}-%{attack.damage}`}>{attack.name}</span>
            ))}
      </div>

*/
