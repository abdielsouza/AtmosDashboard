import { Earth, LayoutDashboard, Settings, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar({children}: {children: React.ReactNode}) {
    return (
        <div className="flex w-full">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <div className="bg-sky-600 text-white p-3 rounded-lg inline-block">
                            <Earth size={20}/>
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href="/">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <LayoutDashboard size={20}/>
                        </div>
                    </Link>
                    <Link href="/customers">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <User size={20}/>
                        </div>
                    </Link>
                    <Link href="/orders">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <ShoppingBag size={20}/>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                            <Settings size={20}/>
                        </div>
                    </Link>
                </div>
            </div>
            <main className="ml-20 w-full">{children}</main>
        </div>
    );
}