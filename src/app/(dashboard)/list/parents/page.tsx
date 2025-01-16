import Image from "next/image";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { ArrowDownWideNarrow, FilePen, Plus, SlidersHorizontal, Trash2 } from "lucide-react";
import { parentsData, role, } from "@/lib/data";
import Link from "next/link";
import FormModel from "@/components/FormModel";

type Parent = {
    id: number;
    parentId: string;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student Name",
        accessor: "studentName",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions"
    }
]

const ParentsListPage = () => {

    const renderRow = (item: Parent) => (
        <tr key={item.id} className="border-b border-yogaGreen border-opacity-70 even:bg-yogaBlue even:bg-opacity-90 text-sm hover:bg-yogaYellow hover:bg-opacity-1">
            <td className="flex items-center gap-4 p-2">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="font-xs text-yogaGray">{item.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(", ")}</td>
            <td className="hidden md:table-cell">{item?.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModel table="parent" type="update" data={item} />
                            <FormModel table="parent" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block  backdrop:text-lg font-semibold ">All Parents</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                            <SlidersHorizontal size={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                            <ArrowDownWideNarrow size={14} />
                        </button>
                        {role === "admin" && (
                            <FormModel table="parent" type="create"/>
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={parentsData} />
            {/* PAGINATION */}
            <Pagination />
            
        </div>
    )
}

export default ParentsListPage;