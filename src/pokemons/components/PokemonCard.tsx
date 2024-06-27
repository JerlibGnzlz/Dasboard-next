import Link from "next/link"
import { simplePokemon } from "../interfaces/simple-interfaces"
import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5"


interface Props {
    pokemon: simplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">

                <div className=" flex flex-col text-center p-6 bg-gray-800 border-b  items-center justify-center">
                    <Image
                        key={pokemon.id}
                        width={50}
                        height={50}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt={pokemon.name}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100" href={`/dashboard/pokemon/${pokemon}`}                        >
                            Mas informacion
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center" >
                        <div className="text-red-600">
                            <IoHeartOutline />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                No es favorito
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
