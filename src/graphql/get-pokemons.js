import gql from "graphql-tag";

export const get_pokemons = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
//Which information to be retrieved via graphql
