import PokemonsPage from "@/app/dashboard/pokemons/page";
import Image from "next/image";
import { simplePokemon } from "../interfaces/simple-interfaces";
import { PokemonCard } from "./PokemonCard";



interface Props {
    pokemons: simplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (

        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map(poke => (

                    <PokemonCard key={poke.id} pokemon={poke} />

                ))
            }
        </div>
    )
};
