"use client"

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const TableSearch = () => {

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        const value = (e.currentTarget[0] as HTMLInputElement).value;
        
        const params = new URLSearchParams(window.location.search)
        params.set("search", value)
        router.push(`${window.location.pathname}?${params}`);

    }

    return (
        <form onSubmit={handleSubmit} className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-[#144E5A] px-2"> 
                <Search size={14} />
                <input type="text" placeholder="Search..." className=" w-[200px] p-2 bg-transparent" />
            </form>
    )
}

export default TableSearch;

//className="hidden md:flex items-center gap-2 text-xs  rounded-full ring-[1.5px] ring-[#144E5A] px-2">