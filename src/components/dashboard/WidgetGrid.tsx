"use client"
import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from '../../storeRedux/index';

export const WidgetGrid = () => {


    const isCart = useAppSelector(state => state.conter.count)
    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget
                subTitle="Productos Agregados"
                title={JSON.stringify(isCart)}
                label="Contador"
                icon={<IoCartOutline size={70} className="text-blue-400" />}
                href={"/dashboard/counter"}
            />
        </div>

    )

}
