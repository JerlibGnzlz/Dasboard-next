import React from "react";
import Image from 'next/image'
import { IoAccessibilitySharp, IoBrowsersOutline, IoCalculator, IoHeartOutline, IoLogoReact } from "react-icons/io5";
import { MenuItem } from "../sidebar/MenuItem";

const menuItems = [
    {
        path: "/dashboard/main",
        icon: <IoBrowsersOutline size={40} />,
        title: "DashBoard",
        subTitle: "Visualizacion"
    },
    {
        path: "/dashboard/counter",
        icon: <IoCalculator size={40} />,
        title: "Counter",
        subTitle: "Contador Client"
    },
    {
        path: "/dashboard/pokemons",
        icon: <IoAccessibilitySharp size={40} />,
        title: "Pokemons",
        subTitle: "Generacion estatica"
    },
    {
        path: "/dashboard/favorites",
        icon: <IoHeartOutline size={40} className="text-red-900" />,
        title: "Favorites",
        subTitle: "Global state"
    }
]


export const Sidebar = () => {
    return (

        <div
            style={{ width: "400px" }}
            id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll">

            <div id="logo" className="my-4 px-6">

                <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact />
                    <span className="m-2">
                        Dash
                    </span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3"
                            width={50}
                            height={50}
                            alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jerlib Gonzlz
                    </span>
                </a>
            </div>



            <div id="nav" className="w-full px-6">

                {menuItems.map(item => (
                    <MenuItem
                        key={item.path}
                        {...item}
                    />
                ))}
            </div>
        </div>

    )

};

