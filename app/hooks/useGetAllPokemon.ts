import { useQuery } from "@tanstack/react-query";
import { getAllPokemon } from "@/app/network/web/pokemon";

export function useGetAllPokemon() {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: getAllPokemon,
  });
}
