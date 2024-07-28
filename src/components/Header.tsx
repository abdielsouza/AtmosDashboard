import { Aperture } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex w-full justify-between items-center px-8 pt-4">
            <h1 className="flex space-x-3 justify-center items-center font-bold text-lg">
                <Aperture size={32} color="black" className="bg-transparent font-bold mr-6"/>
                Atmos Dashboard
            </h1>
            <h2>Welcome back, friend! <br/> <b>Made by <Link href="https://code-zero.vercel.app" target="_blank" className="cursor-pointer underline">CodeZero</Link></b></h2>
        </div>
    );
}