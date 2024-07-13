"use client"
import { useAppDispatch, useAppSelector } from '../../storeRedux/index'
import { decrementar, incrementar, initConterState, resetear } from '../../storeRedux/counter/counterSlice'
import { useEffect } from 'react'
interface Props {
    value?: number
}


export const CartCounter = ({ value = 0 }: Props) => {

    // const [count, setCount] = useState(value)
    const count = useAppSelector((state) => state.conter.count)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initConterState(value))
    }, [dispatch, value]);


    return (
        <>
            <span className="mt-2 text-6xl">{count}</span>

            <div className="flex mt-3">
                <button
                    // onClick={() => { setCount(count + 1) }}
                    onClick={() => dispatch(incrementar())}
                    className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2  ">
                    +1
                </button>

                <button
                    // onClick={() => { setCount(count - 1) }}
                    onClick={() => dispatch(decrementar())}

                    className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ">
                    -1
                </button>
            </div>
        </>
    )
}
