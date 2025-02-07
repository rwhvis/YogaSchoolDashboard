import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { MessageCircleMore, Search, Volume2 } from "lucide-react";
import Image from "next/image";

const navBar = async () => {

    const user = await currentUser();

    return (
        <div className="flex items-center justify-between p-4">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs  rounded-full ring-[1.5px] ring-[#144E5A] px-2">
                <Search size={14} />
                <input type="text" placeholder="Search..." className=" w-[200px] p-2 bg-transparent" />
            </div>
            {/* ICONS AND USER */}
            <div className="flex items-center gap-6 justify-end w-full">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <MessageCircleMore size={20} />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Volume2 size={20} />
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-[#FF0000] text-white text-sm font-semibold rounded-full">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">Rutger Visscher</span>
                    <span className="text-[10px] text-gray-500 text-right">
                        {user?.publicMetadata.role as string}
                    </span>
                </div>
                {/* <Image src="/avatar.png" alt="avatar" width={32} height={32} className="rounded-full" /> */}
                <UserButton />
            </div>
        </div>
    )
}

export default navBar;