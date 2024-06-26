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

                    <PokemonCard key={poke.id} />

                    // <Image key={poke.id}
                    //     width={100}
                    //     height={100}
                    //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                    //     alt={poke.name}
                    // />
                ))
            }
        </div>
    )
};
