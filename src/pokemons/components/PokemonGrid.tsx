// import PokemonsPage from "../../../app/dashboard/pokemons";
import Image from "next/image";
import { simplePokemon } from "../interfaces/simple-interfaces";
import { PokemonCard } from "./PokemonCard";
// import PokemonsPage from "@/app/dashboard/page";



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
