"use client"

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number, count: number }) => {
    
    const router = useRouter()

    const hasPrevPage = ITEM_PER_PAGE * (page - 1) > 0;
    const hasNextPage = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;
    
    const changePage = (newPage: number) => {
        const params = new URLSearchParams(window.location.search)
        params.set("page", newPage.toString())
        router.push(`${window.location.pathname}?${params}`);
    }

    return (
        <div className="p-4 flex items-center justify-between">
            <button
                disabled={!hasPrevPage}
                className="py-2 px-4 rounded-md bg-yogaGreen text-white text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                    changePage(page - 1);
                } }
            >
                Prev

            </button>
            <div className="flex items-center gap-2 text-sm text-yogaGreen">
                {Array.from({ length: Math.ceil(count / ITEM_PER_PAGE) }, (_, index) => {
                    const pageIndex = index + 1;
                    return <button key={pageIndex} className={`px-2 rounded-md ${page === pageIndex ? "bg-yogaBlue" : ""}`}
                        onClick={ ()=>{changePage(pageIndex)} }
                    >
                        {pageIndex}
                    </button>
                })}
                
            </div>
            <button
                disabled={!hasNextPage}
                className="py-2 px-4 rounded-md bg-yogaGreen text-white text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                    changePage(page + 1);
            }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination