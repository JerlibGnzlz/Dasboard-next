import { WidgetGrid } from "@/components";
import { SimpleWidget } from "@/components/dashboard/SimpleWidget";


export const metadata = {
    title: "Admin Dashboard",
}

export default function MainPage() {
    return (
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-lg">Informacion General</span>

            <WidgetGrid />

        </div>
    );
}