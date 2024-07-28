import { data } from "@/data/data";
import { EllipsisVertical, User } from "lucide-react";
import Link from "next/link";

export default function CustomersPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-between p-4">
                <h2 className="text-lg font-bold">Customers</h2>
                <h2>Welcome back, friend! <br/> <b>Made by <Link href="https://code-zero.vercel.app" target="_blank" className="cursor-pointer underline">CodeZero</Link></b></h2>
            </div>
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Name</span>
                        <span className="sm:text-left text-right">Email</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>
                    </div>
                    <ul>
                        {
                            data.map((customer, index) => (
                                <li key={index} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="bg-sky-200 p-3 rounded-lg">
                                            <User size={20} className="text-sky-600" />
                                        </div>
                                        <p className="pl-4">{customer.name.first + ' ' + customer.name.last}</p>
                                    </div>
                                    <p className="text-gray-600 sm:text-left text-right">{customer.email}</p>
                                    <p className="hidden md:flex">{customer.date}</p>
                                    <div className="sm:flex hidden justify-between items-center">
                                        <p>{customer.method}</p>
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