import { Pokemon } from "@/app/types/pokemon";

export const getAllPokemon = async (): Promise<Pokemon[]> => {
  // fetch the first 15 from the list
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
  const listData = await response.json();

  // fetch details for the first 10 fetched since initially, it returns with each pokemon's url
  const pokemonDetails = await Promise.all(
    listData.results.slice(0, 10).map(async (pokemon: { url: string }) => {
      const detailResponse = await fetch(pokemon.url);
      return await detailResponse.json();
    })
  );

  return pokemonDetails as Pokemon[];
};
