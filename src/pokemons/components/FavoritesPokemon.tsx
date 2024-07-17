"use client"

import { useAppSelector } from "@/storeRedux";
import { PokemonGrid } from "./PokemonGrid";


export const FavoritesPokemon = () => {

    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemon))

    return (

        <PokemonGrid pokemons={favoritesPokemons} />
    )
};
