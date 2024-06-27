import { Pokeid } from "@/pokemons"

interface Props {
    params: { id: string }
}


const getPokemons = async (id: string): Promise<Pokeid> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,
        { cache: "force-cache" }//TODO: cambiarlo mas adelante
    )
        .then(res => res.json())

    return pokemon
}

export default async function PokemonPage({ params }: Props) {

    const getPoke = await getPokemons(params.id)
    return (
        <div>
            <h1>Pokemon {params.id}</h1>
            {JSON.stringify(getPoke)}
        </div>
    );
}