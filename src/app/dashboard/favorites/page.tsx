import { IPokemon, simplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import Image from "next/image";


export const metadata = {
    title: "Favoritos",
    description: ""
}


export default async function PokemonsPage() {

    return (
        <>
            <div className="flex flex-col">

                <span className="text-lg font-bold my-2 text-center">Listado de Pokemones <small
                    className="text-blue-500">Global state</small></span>

                <PokemonGrid pokemons={[]} />

            </div>
        </>
    );
}