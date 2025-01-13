import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { ArrowDownWideNarrow, Eye, Plus, SlidersHorizontal, Trash2 } from "lucide-react";
import { classesData, role, studentsData } from "@/lib/data";
import Link from "next/link";

type Class = {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
}

const columns = [
    {
        header: "Class Name",
        accessor: "name",
    },
    {
        header: "Capacity",
        accessor: "capacity",
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Supervisor",
        accessor: "supervisor",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions",
    }
]

const ClassListPage = () => {

    const renderRow = (item: Class) => (
        <tr key={item.id} className="border-b border-yogaGreen border-opacity-70 even:bg-yogaBlue even:bg-opacity-90 text-sm hover:bg-yogaYellow hover:bg-opacity-1">
            <td className="flex items-center gap-4 p-2">
                {item.name}</td>
            <td className="">{item.capacity}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.supervisor}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-yogaYellow text-yogaGreen">
                            <Eye size={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <button className=" w-7 h-7 flex items-center justify-center rounded-full bg-yogaRed text-white">
                            <Trash2 size={16} />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block  backdrop:text-lg font-semibold ">All Classes</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                            <SlidersHorizontal size={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                            <ArrowDownWideNarrow size={14} />
                        </button>
                        {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                            <Plus size={14} />
                        </button>)}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={classesData} />
            {/* PAGINATION */}
            <Pagination />
            
        </div>
    )
}

export default ClassListPage;