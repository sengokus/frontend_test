"use client";

import styles from "./page.module.css";

import Gallery from "./gallery";
import { useGetAllPokemon } from "./hooks/useGetAllPokemon";

export default function Home() {
  const { data: pokemonList, isLoading, error } = useGetAllPokemon();

  if (isLoading) {
    return (
      <main className={styles.main}>
        <div>Loading...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main}>
        <div>Error loading Pokemon</div>
      </main>
    );
  }

  if (!pokemonList) {
    return (
      <main className={styles.main}>
        <div>No Pokemon data available</div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Gallery pokemon={pokemonList} />
    </main>
  );
}
