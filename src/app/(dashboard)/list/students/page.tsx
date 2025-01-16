import Image from "next/image";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { ArrowDown, ArrowDownRight, ArrowDownWideNarrow, Eye, Plus, SlidersHorizontal, Trash2 } from "lucide-react";
import { role, studentsData, teachersData } from "@/lib/data";
import Link from "next/link";
import FormModel from "@/components/FormModel";

type Student = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    address: string;
}

const columns = [
    {
        header: "Info",
        accessor: "info"
    },
    {
        header: "Student ID",
        accessor: "studentId",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
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

const StudentListPage = () => {

    const renderRow = (item: Student) => (
        <tr key={item.id} className="border-b border-yogaGreen border-opacity-70 even:bg-yogaBlue even:bg-opacity-90 text-sm hover:bg-yogaYellow hover:bg-opacity-1">
            <td className="flex items-center gap-4 p-2">
                <Image
                    src={item.photo}
                    alt=""
                    width={40}
                    height={40}
                    className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="font-xs text-yogaGray">{item.class}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item?.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/students/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-yogaYellow text-yogaGreen">
                            <Eye size={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        // <button className=" w-7 h-7 flex items-center justify-center rounded-full bg-yogaRed text-white">
                        //     <Trash2 size={16} />
                        // </button>
                        <FormModel table="student" type="delete" id={item.id} />
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block  backdrop:text-lg font-semibold ">All Students</h1>
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
                        //     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#144E5A] text-white">
                        //          <Plus size={14} />
                            //      </button>
                            <FormModel table="student" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={studentsData} />
            {/* PAGINATION */}
            <Pagination />
            
        </div>
    )
}

export default StudentListPage;