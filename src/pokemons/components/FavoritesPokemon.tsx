"use client"

import { useAppSelector } from "@/storeRedux";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";


export const FavoritesPokemon = () => {

    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemon.favorites))
    const [pokemon, setPokemon] = useState(favoritesPokemons);


    return (

        <PokemonGrid pokemons={pokemon} />
    )
};
