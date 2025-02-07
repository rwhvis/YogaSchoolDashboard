import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
}: Readonly < {
    children: React.ReactNode;
}>) {
    return <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-1/6 md:w-[8%] lg:w-1/6">
            <Link href="/" className="flex items-center justify-center gap-2 p-4">
                <Image className="lg:hidden" src="/logo_icon.png" alt="logo" width={32} height={32} />
                <Image className="hidden lg:block" src="/logo_full.png" alt="logo" width={256} height={64} />
            </Link>
            <Menu />
        </div> 

        {/* RIGHT */}
        <div className="w-5/6 md:w-[92%] lg:w-5/6 bg-[#B5CED3] overflow flex flex-col">
            <Navbar />
            {children}
        </div>
    </div>
}
