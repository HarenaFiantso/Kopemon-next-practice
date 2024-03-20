interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: string | undefined;
  name: string;
  types: { type: { name: string } }[];
  weight: number;
  height: number;
}
