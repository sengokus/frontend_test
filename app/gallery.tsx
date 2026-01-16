"use client";

import { useState } from "react";
import {
  FaRegCircleXmark,
  FaEnvelope,
  FaBookmark,
  FaList,
} from "react-icons/fa6";

import Modal from "./modal";

import { Pokemon } from "./types/pokemon";
import { capitalize } from "./utils/string-utils";
import Image from "next/image";

export type GalleryProps = {
  pokemon: Pokemon[];
};
const Gallery = ({ pokemon }: GalleryProps) => {
  const [pokemonList, setPokemonList] = useState(pokemon);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (id: number) => {
    const pokemon = pokemonList.find((item) => item.id === id) || null;

    if (pokemon) {
      setSelectedPokemon(pokemon);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  return (
    <div className="pokemon-gallery">
      <h1 className="heading">Pokemon</h1>
      <div className="items">
        {pokemonList &&
          pokemonList.map((pokemon, index) => (
            <div
              className="item pokemon-card"
              key={index}
              onClick={() => handleModalOpen(pokemon.id)}
            >
              <div className="body">
                <Image
                  src={pokemon.sprites.front_default || ""}
                  alt={pokemon.name}
                  width={96}
                  height={96}
                  className="avatar-image"
                />
              </div>
              <div className="info">
                <div className="name">{capitalize(pokemon.name)}</div>
                <div className="base-experience">
                  Base Experience: {pokemon.base_experience}
                </div>
              </div>
            </div>
          ))}

        {/* modal for selected pokemon */}
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <div className="pokemon-panel">
            <div className="header">
              <div
                role="button"
                tabIndex={0}
                className="close"
                onClick={handleModalClose}
              >
                <FaRegCircleXmark size={32} />
              </div>
            </div>
            <div className="body">
              {selectedPokemon && (
                <div className="pokemon-info info">
                  <div className="avatar">
                    <Image
                      src={selectedPokemon.sprites.front_default}
                      alt={selectedPokemon.name}
                      width={120}
                      height={120}
                      className="avatar-image"
                    />
                  </div>
                  <div className="name">{capitalize(selectedPokemon.name)}</div>
                  <div className="field">
                    <FaBookmark className="icon" />
                    <div className="value">
                      Base Experience: {selectedPokemon.base_experience}
                    </div>
                  </div>
                  <div className="field">
                    <FaList className="icon" />
                    <div className="value">
                      {selectedPokemon.abilities
                        .map((ability) => capitalize(ability.ability.name))
                        .join(", ")}
                    </div>
                  </div>
                  <div className="field">
                    <FaEnvelope className="icon" />
                    <div className="value">
                      {selectedPokemon.moves
                        .map((move) => capitalize(move.move.name))
                        .join(", ")}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
