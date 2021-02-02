// to encapsulate(Loop) all the pokemon
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { get_pokemons } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(get_pokemons, {
    variables: { first: 20 },
  });
  //Based on Graphql pokeapi requirement of first:Int!

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}

//Mapping pokemon with keys for rendering later on
