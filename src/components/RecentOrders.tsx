import { data } from "@/data/data";
import { ShoppingBag } from "lucide-react";

export default function RecentOrders() {
    return (
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <ul>
                {
                    data.map((order, index) => (
                        <li key={index} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer">
                            <div className="bg-sky-200 rounded-lg p-3">
                                <ShoppingBag className="text-sky-600 bg-transparent" size={20} />
                            </div>
                            <div className="pl-4">
                                <p className="text-gray-800 font-bold">${order.total}</p>
                                <p className="text-gray-400 text-sm">{order.name.first}</p>
                            </div>
                            <p className="lg:flex md:hidden absolute right-6 text-sm">{order.date}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}