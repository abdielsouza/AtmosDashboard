import { data } from "@/data/data";
import { EllipsisVertical, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-between px-4 pt-4">
                <h2 className="text-lg font-bold">Orders</h2>
                <h2>Welcome back, friend! <br/> <b>Made by <Link href="https://code-zero.vercel.app" target="_blank" className="cursor-pointer underline">CodeZero</Link></b></h2>
            </div>
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Order</span>
                        <span className="sm:text-left text-right">Status</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>
                    </div>
                    <ul>
                        {
                            data.map((order, index) => (
                                <li key={index} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="bg-sky-200 p-3 rounded-lg">
                                            <ShoppingBag size={20} className="text-sky-600" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="text-gray-800 font-bold">${order.total.toLocaleString()}</p>
                                            <p className="text-gray-800 text-sm">{order.name.first}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 sm:text-left text-right">
                                        <span className={
                                            order.status === "Processing" ? "bg-green-200 p-2 rounded-lg"
                                            :
                                            order.status === "Completed" ? "bg-blue-200 p-2 rounded-lg"
                                            :
                                            "bg-yellow-200 p-2 rounded-lg"
                                        }>
                                            {order.status}
                                        </span>
                                    </p>
                                    <p className="hidden md:flex">{order.date}</p>
                                    <div className="sm:flex hidden justify-between items-center">
                                        <p>{order.method}</p>
                                        <EllipsisVertical size={20} />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}