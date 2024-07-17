import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { simplePokemon } from '../../pokemons/interfaces/simple-interfaces';


export interface PokemonState {
    favorites: { [key: string]: simplePokemon }
}

const getInitialState = (): PokemonState => {
    const favcoritos = JSON.parse(localStorage.getItem("favorites-pokemon") ?? "{}")
    return favcoritos
}

const initialState: PokemonState = {
    favorites: {}
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        toggleFavoritos: (state, action: PayloadAction<simplePokemon>) => {
            const pokemon = action.payload
            const { id } = pokemon

            if (!!state.favorites[id]) {
                delete state.favorites[id]
                // return
            } else {
                state.favorites[id] = pokemon
            }
            localStorage.setItem("favorites-pokemon", JSON.stringify(state.favorites))
        }
    },
})

export const { toggleFavoritos } = pokemonSlice.actions

export default pokemonSlice.reducer