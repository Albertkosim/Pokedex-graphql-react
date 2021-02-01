import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";
import "./App.css";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [catchPokemon, setCatchPokemon] = useState({});
  // to enable Catch Pokemon
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
  });

  return (
    <ApolloProvider client={client}>
      <div onClick={(e) => console.log("clicked")}>
        <PokemonsContainer />
      </div>
    </ApolloProvider>
  );
}
//OnClick will be configured to PokemonDetail Page

export default App;
