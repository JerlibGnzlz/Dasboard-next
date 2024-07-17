import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { simplePokemon } from '../../pokemons/interfaces/simple-interfaces';


export interface PokemonState {
    [key: string]: simplePokemon
}

const initialState: PokemonState = {
    "1": { id: "1", name: "bulbasur" },
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

    },
})

export const { } = pokemonSlice.actions

export default pokemonSlice.reducer