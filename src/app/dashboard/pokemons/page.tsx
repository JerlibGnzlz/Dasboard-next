import { IPokemon, simplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import Image from "next/image";


export const metadata = {
    title: "Pokemones",
}

const getPokemons = async (limit = 20, offset = 0): Promise<simplePokemon[]> => {
    const data: IPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemones = data.results.map(pokemon => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name
    }))

    return pokemones
}


export default async function PokemonsPage() {

    const pokemones = await getPokemons(151)

    return (
        <>
            <div className="flex flex-col">

                <span className="text-lg font-bold my-2 text-center">Pokemones <small
                    className="text-blue-500">estaticos</small></span>
                <PokemonGrid pokemons={pokemones} />
            </div>
        </>
    );
}