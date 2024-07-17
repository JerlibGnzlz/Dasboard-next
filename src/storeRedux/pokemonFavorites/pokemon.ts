import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface PokemonState {

}

const initialState: PokemonState = {

}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

    },
})

export const { } = pokemonSlice.actions

export default pokemonSlice.reducer