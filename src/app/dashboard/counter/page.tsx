"use client"
import { useState } from "react";

export default function NamePage() {


    const [count, setCount] = useState(10)


    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <span className="mt-2 text-6xl">{count}</span>

            <div className="flex mt-3">
                <button
                    onClick={() => { setCount(count + 1) }}
                    className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2  ">
                    +1
                </button>

                <button
                    onClick={() => { setCount(count - 1) }}
                    className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ">
                    -1
                </button>
            </div>

        </div>
    );
}