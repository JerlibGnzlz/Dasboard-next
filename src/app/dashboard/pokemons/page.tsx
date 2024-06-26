import { IPokemon, simplePokemon } from "@/app/pokemons";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import Image from "next/image";

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

    const pokemons = await getPokemons(151)

    return (
        <>
            <div className="flex flex-col">

                <span className="text-lg font-bold my-2 text-center">Listado de Pokemones <small>estaticos</small></span>

                <PokemonGrid pokemons={pokemons} />
            </div>
        </>
    );
}