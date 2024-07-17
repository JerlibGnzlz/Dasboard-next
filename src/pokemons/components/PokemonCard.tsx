"use client"
import Link from "next/link"
import { simplePokemon } from "../interfaces/simple-interfaces"
import Image from "next/image"
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "@/storeRedux"
import { toggleFavoritos } from "@/storeRedux/pokemonFavorites/pokemon"


interface Props {
    pokemon: simplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const dispatch = useAppDispatch()
    const { id, name } = pokemon

    const isFavorite = useAppSelector(state => !!state.pokemon.favorites[id])
    console.log({ isFavorite })


    const onToggle = () => {
        dispatch(toggleFavoritos(pokemon))
    }

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
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100" href={`/dashboard/pokemon/${id}`}                        >
                            Mas informacion
                        </Link>
                    </div>
                </div>
                <div
                    onClick={onToggle}
                    className="border-b">
                    <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" >
                        <div className="text-red-600">
                            {isFavorite ? (<IoHeart />) : (<IoHeartOutline />)}
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {isFavorite ? "Es favorito" : "No es Favorito"}
                            </p>
                            <p className="text-xs text-gray-500">Click para cambiar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
