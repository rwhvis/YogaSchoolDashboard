import { Search } from "lucide-react";

const TableSearch = () => {
    return (
        <div className="hidden md:flex items-center gap-2 text-xs  rounded-full ring-[1.5px] ring-[#144E5A] px-2">
                <Search size={14} />
                <input type="text" placeholder="Search..." className=" w-[200px] p-2 bg-transparent" />
            </div>
    )
}

export default TableSearch;